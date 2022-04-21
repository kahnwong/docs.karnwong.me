---
title: PySpark
---

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


### Test snippet
```python
from pyspark import SparkContext, SparkConf
import numpy as np
from operator import itemgetter
from matplotlib import pyplot as plt


sc = SparkContext.getOrCreate()

TOTAL = 100000
dots = sc.parallelize([2.0 * np.random.random(2) - 1.0 for i in range(TOTAL)]).cache()
print("Number of random points:", dots.count())

stats = dots.stats()
print("Mean:", stats.mean())
print("stdev:", stats.stdev())

plt.figure(figsize=(10, 5))

# Plot 1
plt.subplot(1, 2, 1)
plt.xlim((-1.0, 1.0))
plt.ylim((-1.0, 1.0))

sample = dots.sample(False, 0.01)
X = sample.map(itemgetter(0)).collect()
Y = sample.map(itemgetter(1)).collect()
plt.scatter(X, Y)

# Plot 2
plt.subplot(1, 2, 2)
plt.xlim((-1.0, 1.0))
plt.ylim((-1.0, 1.0))

inCircle = lambda v: np.linalg.norm(v) <= 1.0
dotsIn = sample.filter(inCircle).cache()
dotsOut = sample.filter(lambda v: not inCircle(v)).cache()

# inside circle
Xin = dotsIn.map(itemgetter(0)).collect()
Yin = dotsIn.map(itemgetter(1)).collect()
plt.scatter(Xin, Yin, color="r")

# outside circle
Xout = dotsOut.map(itemgetter(0)).collect()
Yout = dotsOut.map(itemgetter(1)).collect()
plt.scatter(Xout, Yout)
```

## Init
```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, when, lit, coalesce
from pyspark.sql.types import (
    StructType,
    StructField,
    IntegerType,
    DoubleType,
    StringType,
    TimestampType,
)
from pyspark.sql.window import Window
import pyspark.sql.functions as F

spark = (
    SparkSession.builder.appName("Pyspark playground")
    .config("spark.hadoop.fs.s3a.access.key", KEY)
    .config("spark.hadoop.fs.s3a.secret.key", SECRET)
    .config("spark.executor.memory", "4g")
    .config("spark.driver.memory", "4g")
    .getOrCreate()
)

# set config after spark session is created
spark_session.conf.set("spark.executor.memory", "8g")

spark.sparkContext.setLogLevel("ERROR")
spark.sparkContext.setCheckpointDir("checkpoint")  # [DEBUG]
```

### Add JARs at runtine
```python
import os

os.environ['PYSPARK_SUBMIT_ARGS'] = '--packages "org.apache.hadoop:hadoop-aws:2.7.3" pyspark-shell'
```

## I/O
```python
# CSV / TSV
project = spark.read.csv(
    project_file,
    header='true',
    inferSchema='true',
    sep="\t",
    nullValue=r'\N',
    timestampFormat="yyyy-MM-dd HH:mm:ss"
)
spark.write.csv(output_path, header=True)

# JSON
spark.read.json("data/DMP_HIVE/all_listing.json") # add .option("multiLine", True) for multi-line
spark.write.json(OUTPATH, compression='gzip')
```

## DataFrame
```python
# describe dataframe
df.printSchema()  # .columns(), .dtypes(), describe() also exists

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
```

## Transformations
```python
# rename columns
df.withColumnRenamed("old_name", "new_name")

# add null column
df.withColumn(col_name, lit(None).cast(col_type))

# dtype casting
df.withColumn("col_name", df["col_name"].cast(IntegerType()))

# combine values from multiple rows via groupby
df.groupBy(groupby_col).agg(F.collect_list(col_name))

# select elem by name from array column
F.col(col_name)["$elem_key"])

## by index
F.col(col_name).getItem(0)

# find median
df_spark.approxQuantile(df_spark.columns, [0.5], 0.25)

# get percentile
df.approxQuantile(["Apple", "Oranges"], [0.1, 0.25, 0.5, 0.75, 0.9, 0.95], 0.1)

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
F.array("x_1", "x_2"))

# fillna with another column
F.coalesce("a", "b")

# create new column with max value from set of columns
F.greatest(a["one"], a["two"], a["three"])

# regex matching --> longest maching works if longest regex is at the start
F.regexp_replace(trim(lower(col(col_name))), regex_str, "")

# explode array
df.withColumn("tmp", F.explode("tmp")).select(
    *df.columns,
    col("tmp.a"),
    col("tmp.b"),
    col("tmp.c")
)

# convert to JSON
F.to_json(c)

# convert to list
df.select("mvv").rdd.flatMap(lambda x: x).collect()
```

### datetime
```python
# epoch to timestamp
F.from_unixtime(df.column / 1000)

# timestamp to date
F.to_date("listing_update")

# utz to to tz
F.from_utc_timestamp("datetime_utc", "CST")
```


## Cookbook
### Count missing values  + groupby
```python
df.select([F.count(F.when(F.col(c).isNull(), c)).alias(c) for c in df.columns])
```

### Filter by order
```python
from pyspark.sql.window import Window


w = Window().partitionBy(partition_col).orderBy(F.desc(order_by_key))

(
    df
    .withColumn("rank", F.row_number().over(w))
    .filter(col("rank") == 1)
    .drop(col("rank"))
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
```


### Skew join optimization
https://stackoverflow.com/a/57951114

```python
from math import exp
from random import randint
from datetime import datetime


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
(
    spark.read.format("jdbc")
    .option("url", "jdbc:postgresql://{}:5432/{}".format(host, db_name))
    .option("query", query)
    .option("user", username)
    .option("password", password)
    .option("driver", "org.postgresql.Driver")
    .load()
)

(
    df.write.format("jdbc")
    .option("url", "jdbc:postgresql://{}:5432/{}".format(host, db_name))
    .option("dbtable", table_name)
    .option("user", username)
    .option("password", password)
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

spark = (
    SparkSession.builder.appName("myApp")
    .config(
        "spark.mongodb.input.uri",
        "mongodb://USER:PASSWORD@HOST:27017/DB.COLLECTION?authSource=admin&readPreference=primary&ssl=false",
    )
    .config(
        "spark.mongodb.input.uri",
        "mongodb://USER:PASSWORD@HOST:27017/DB.COLLECTION?authSource=admin&readPreference=primary&ssl=false",
    )
    .getOrCreate()
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
