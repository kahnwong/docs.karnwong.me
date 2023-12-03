---
outline: deep
---

# PySpark

## Install

:::info
make sure pyspark version is same as spark version
:::

```bash
brew install apache-spark
pip3 install pyspark
```

## Resources

- [PySpark Style Guide](https://github.com/palantir/pyspark-style-guide)

## Dummy dataframe

```python
# https://stackoverflow.com/a/57960267/19652796

df = spark.createDataFrame(
    [
        (1, "foo"),  # create your data here, be consistent in the types.
        (2, "bar"),
    ],
    ["id", "label"],  # add your column names here
)
```

## Init

```python
import pyspark.sql.functions as F
from pyspark.sql import SparkSession
from pyspark.sql.functions import coalesce
from pyspark.sql.functions import col
from pyspark.sql.functions import lit
from pyspark.sql.functions import when
from pyspark.sql.types import DoubleType
from pyspark.sql.types import IntegerType
from pyspark.sql.types import StringType
from pyspark.sql.types import StructField
from pyspark.sql.types import StructType
from pyspark.sql.types import TimestampType
from pyspark.sql.window import Window

spark = (
    SparkSession.builder.appName("Pyspark playground")
    .config("spark.hadoop.fs.s3a.access.key", KEY)
    .config("spark.hadoop.fs.s3a.secret.key", SECRET)
    .config("spark.executor.memory", "4g")
    .config("spark.driver.memory", "4g")
    .config("spark.jars.packages", "")
    .getOrCreate()
)

# set config after spark session is created
spark_session.conf.set("spark.executor.memory", "8g")

spark.sparkContext.setLogLevel("ERROR")
spark.sparkContext.setCheckpointDir("checkpoint")  # [DEBUG]
```

## I/O

```python
# CSV / TSV
project = spark.read.csv(
    project_file,
    header="true",
    sep="\t",
)
spark.write.csv(output_path, header=True)

# JSON
spark.read.json(
    "data/DMP_HIVE/all_listing.json"
)  # add .option("multiLine", True) for multi-line
spark.write.json(OUTPATH, compression="gzip")
```

## DataFrame

```python
# metadata
df.printSchema()  # or .columns

# select columns
df.select(["a", "b", "c"])

# sampling
df.sample(False, sampling_percentage, seed=0)

# count records
df.count()

# conversions
df.toPandas()  # spark to pandas
spark_session.createDataFrame(df)  # pandas to spark

# show in vertical
df.show(n=3, truncate=False, vertical=True)

# get schema in JSON
schema = df.schema.jsonValue()
schema = schema["fields"]
```

## Transformations

```python
# rename columns
df.withColumnRenamed("old_name", "new_name")

# add null column
df.withColumn(col_name, F.lit(None).cast(col_type))

# dtype casting
df.withColumn("col_name", df["col_name"].cast(IntegerType()))

# combine values from multiple rows via groupby
df.groupBy(groupby_col).agg(F.collect_list(col_name))

# select elem by name from array column
F.col(col_name)["elem_key"]

# select elem by name from array column - by index
F.col(col_name).getItem(0)

# find median
df.approxQuantile(df.columns, [0.5], 0.25)

# get percentile
df.approxQuantile(["Apple", "Oranges"], [0.1, 0.25, 0.5, 0.75, 0.9, 0.95], 0.1)

# get median during groupby
# https://stackoverflow.com/a/71735997
df.groupBy("Id").agg(F.percentile_approx("value", 0.5).alias("median_approximate"))

# join
df.join(
    df2,
    [
        key
    ],  # df.key == df2.key in case keys are different, otherwise [COL_NAME] to prevent column duplicates
    how="left",
)
```

### functions

```python
# combine cols to array
F.array("x_1", "x_2")

# fillna with another column
F.coalesce("a", "b")

# create new column with max value from set of columns
F.greatest(a["one"], a["two"], a["three"])

# regex matching --> longest maching works if longest regex is at the start
F.regexp_replace(trim(lower(col(col_name))), regex_str, "")

# explode array
df.withColumn("tmp", F.explode("tmp")).select(
    *df.columns, col("tmp.a"), col("tmp.b"), col("tmp.c")
)

# convert to JSON
F.to_json(c)

# convert to list
df.select("mvv").rdd.flatMap(lambda x: x).collect()

# udf
from pyspark.sql.functions import udf
import pyspark.sql.functions as F
from pyspark.sql.types import StringType


@udf(returnType=StringType())
def object_id_to_date(object_id: str):
    object_id = ObjectId(object_id)

    return str(object_id.generation_time.date())


df.select(object_id_to_date("_id").alias("creation_date"))
```

### datetime

```python
# epoch to timestamp
F.from_unixtime(df.column / 1000)

# timestamp to date
F.to_date("listing_update")

# utz to to tz
F.from_utc_timestamp("datetime_utc", "CST")

# filter between date range
df.filter(
    F.col("date_col").between(
        F.date_add(F.current_date(), -7), F.date_add(F.current_date(), -1)
    )
)
```

### SQL

```python
df.createOrReplaceTempView("foo")

spark.sql(
    """
    SELECT *
    FROM foo
    """
)
```

## Optimization

### Caching

[More details](https://stackoverflow.com/questions/26870537/what-is-the-difference-between-cache-and-persist)

:::info
Improves read performance for frequently accessed DataFrame
:::

```python
df.cache()

# clear cache
spark.catalog.clearCache()
```

### Repartition + partition data

```python
df.repartition(4)
df.write.partitionBy(*partition_columns).parquet(base_path, mode=write_mode)
```

### Dynamic partition write mode

```python
"""
Note: Why do we have to change partitionOverwriteMode?
Without config partitionOverwriteMode = 'dynamic', Spark will
overwrite all partitions in hierarchy with the new
data we are writing. That's undesirable and dangerous.
https://stackoverflow.com/questions/42317738/how-to-partition-and-write-dataframe-in-spark-without-deleting-partitions-with-n
Therefore, we will temporarily use 'dynamic' within the context of writing files to storage.
"""

spark.conf.set("spark.sql.sources.partitionOverwriteMode", "dynamic")
```

### Skew join optimization

<https://stackoverflow.com/a/57951114>

```python
from datetime import datetime
from math import exp


def count_elements(splitIndex, iterator):
    n = sum(1 for _ in iterator)
    yield (splitIndex, n)


def get_part_index(splitIndex, iterator):
    for it in iterator:
        yield (splitIndex, it)


num_parts = 18
# create the large skewed rdd
skewed_large_rdd = sc.parallelize(range(0, num_parts), num_parts).flatMap(
    lambda x: range(0, int(exp(x)))
)
skewed_large_rdd = skewed_large_rdd.mapPartitionsWithIndex(
    lambda ind, x: get_part_index(ind, x)
)
skewed_large_df = spark.createDataFrame(skewed_large_rdd, ["x", "y"])

small_rdd = sc.parallelize(range(0, num_parts), num_parts).map(lambda x: (x, x))
small_df = spark.createDataFrame(small_rdd, ["a", "b"])

## prep salts
salt_bins = 100
from pyspark.sql import functions as F

skewed_transformed_df = skewed_large_df.withColumn(
    "salt", (F.rand() * salt_bins).cast("int")
).cache()

small_transformed_df = small_df.withColumn(
    "replicate", F.array([F.lit(i) for i in range(salt_bins)])
)
small_transformed_df = (
    small_transformed_df.select("*", F.explode("replicate").alias("salt"))
    .drop("replicate")
    .cache()
)

## magic happens here
t0 = datetime.now()
result2 = skewed_transformed_df.join(
    small_transformed_df,
    (skewed_transformed_df["x"] == small_transformed_df["a"])
    & (skewed_transformed_df["salt"] == small_transformed_df["salt"]),
)
result2.count()
print("The direct join takes %s" % (str(datetime.now() - t0)))
```

## JDBC

:::info
To overwrite without losing schema & permission, use `truncate`
:::

### Postgres

```python
spark = (
    SparkSession.builder.appName("Pyspark playground")
    .config("spark.executor.memory", "16g")
    .config("spark.driver.memory", "16g")
    .config("spark.jars.packages", "org.postgresql:postgresql:42.5.0")
    .getOrCreate()
)

uri = "jdbc:postgresql://host.docker.internal:5432/postgres"

### read
(
    spark.read.format("jdbc")
    .option("url", uri)
    .option("dbtable", TABLENAME)
    .option("user", USERNAME)
    .option("password", PASSWORD)
    .option("driver", "org.postgresql.Driver")
    .load()
)

### write
(
    df.write.format("jdbc")
    .option("url", uri)
    .option("dbtable", TABLENAME)
    .option("user", USERNAME)
    .option("password", PASSWORD)
    .option("driver", "org.postgresql.Driver")
    .option("truncate", "true")
    .mode("overwrite")
    .save()
)
```

### MongoDB

```python
import os

os.environ[
    "PYSPARK_SUBMIT_ARGS"
] = '--packages "org.mongodb.spark:mongo-spark-connector_2.11:2.4.2" pyspark-shell'

from pyspark.sql import SparkSession

### read
(
    spark.read.format("mongodb")
    .option("connection.uri", uri)
    .option("database", DBNAME)
    .option("collection", TABLENAME)
    .load()
)

### write
(
    df.write.format("mongodb")
    .option("connection.uri", uri)
    .option("database", DBNAME)
    .option("collection", TABLENAME)
    .mode("overwrite")
    .save()
)
```

## spark-submit

```bash
spark-submit --conf spark.driver.memory=25gb --executor-memory 13g --num-executors 50 --driver-memory 20g FILE.PY

spark-submit --conf maximizeResourceAllocation=true FILE.PY

### AWS EMR
# also change checkpoint dir to "mnt/checkpoint"
spark-submit --py-files dist-matrix-module.zip  property_distance_matrix.py

# alternative
spark-submit --deploy-mode cluster s3://<PATH TO FILE>/sparky.py
```

## Misc

```bash
# get spark location
echo 'sc.getConf.get("spark.home")' | spark-shell
```

## Sedona

```python
from sedona.spark import SedonaContext

config = (
    SedonaContext.builder()
    .config(
        "spark.jars.packages",
        "org.apache.sedona:sedona-spark-shaded-3.4_2.12:1.4.1,"
        "org.datasyslab:geotools-wrapper:1.4.0-28.2",
    )
    .getOrCreate()
)

sedona = SedonaContext.create(config)


## read geoparquet
df = sedona.read.format("geoparquet").load("data/example.parquet")


## spatial query
df.createOrReplaceTempView("df")
sedona.sql(
    """
SELECT *, ST_GeoHash(geometry, 5) as geohash
FROM df
ORDER BY geohash
    """
).show()

## polygon from point
ST_Intersects(ST_Point(l.longitude, l.latitude), ST_GeomFromWKT(geometry))

## find surrounding points within x radius
ST_Distance( ST_Point(df.LON, df.LAT), ST_Point(poi.longitude, poi.latitude) ) <= 100/1000/111.319 -- 100 meter in degrees
```

## Cookbook

### Generate fake data

```python
import uuid

from faker import Faker
from pyspark import SparkContext
from tqdm import tqdm

from utils.create_spark_session import get_spark_session


### config
N = 500000


### init spark
spark = get_spark_session()


### main
fake = Faker()

schema = {
    "id": uuid.uuid4,
    "name": fake.name,
    "company": fake.company,
    "address": fake.address,
    "latitude": fake.latitude,
    "longitude": fake.longitude,
    "phone_number": fake.phone_number,
    "created_at": fake.date_time,
    "updated_at": fake.date_time,
}

values = [
    tuple(str(i()) if i == uuid.uuid4 else i() for i in schema.values())
    for _ in tqdm(range(N))
]


### generate seed data
sc = SparkContext.getOrCreate()

rdd = sc.parallelize(values)

# Create a DataFrame from the RDD
df = spark.createDataFrame(rdd, list(schema.keys()))
df.repartition(4).write.parquet("data/seed_data", mode="overwrite")
```

### Count missing values + groupby

```python
df.select([F.count(F.when(F.col(c).isNull(), c)).alias(c) for c in df.columns])
```

### Filter by order

```python
from pyspark.sql.window import Window


w = Window().partitionBy(partition_col).orderBy(F.desc(order_by_key))

(
    df.withColumn("rank", F.row_number().over(w))
    .filter(col("rank") == 1)
    .drop(col("rank"))
)
```

### Sum columns horizontally

```python
t = spark.createDataFrame(
    [
        (1, 2, 4, 0),
        (2, 5, 4, None),
        (2, 6, 4, 1),
    ],
    ["id", "a", "b", "c"],  # add your column names here
)

t.withColumn(
    "count",
    sum(when(t[col].isNull(), F.lit(0)).otherwise(t[col]) for col in ["a", "b", "c"]),
).show()

# OR, this one uses `col` instead of `df`
t.withColumn(
    "count",
    sum(when(col(i).isNull(), F.lit(0)).otherwise(col(i)) for i in ["a", "b", "c"]),
).show()
```

Output

```
+---+---+---+----+-----+
| id|  a|  b|   c|count|
+---+---+---+----+-----+
|  1|  2|  4|   0|    6|
|  2|  5|  4|null|    9|
|  2|  6|  4|   1|   11|
+---+---+---+----+-----+
```
