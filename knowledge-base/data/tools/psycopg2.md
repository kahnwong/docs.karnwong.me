---
outline: deep
---

# psycopg2

## Usage

```python
import psycopg2
from psycopg2.extras import RealDictCursor


### init postgres
conn = psycopg2.connect(
    host=os.environ["DB_HOSTNAME"],
    dbname=os.environ["DB_NAME"],
    user=os.environ["DB_USERNAME"],
    password=os.environ["DB_PASSWORD"],
)

cur = conn.cursor(cursor_factory=RealDictCursor)


def query(QUERY: str):
    cur.execute(QUERY)

    return [dict(r) for r in cur.fetchall()]
```

## Cookbook

### Bulk insert

```python
with gzip.open(filename, "r") as f:
    data_raw = f.readlines()


def dict_to_tuple(json_dict_str: Dict[str, Any]) -> Tuple[Any]:
    json_dict = json.loads(json_dict_str.decode("utf-8"))
    json_dict.pop("_id")

    return tuple(json_dict.values())


data = [dict_to_tuple(i) for i in data_raw]


cur.executemany(
    """
    INSERT INTO
        users (id, name, company, address, latitude, longitude, phone_number, created_at, updated_at)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
    ON CONFLICT (id)
    DO UPDATE SET
        name = EXCLUDED.name,
        company = EXCLUDED.company,
        address = EXCLUDED.address,
        latitude = EXCLUDED.latitude,
        longitude = EXCLUDED.longitude,
        phone_number = EXCLUDED.phone_number,
        created_at = EXCLUDED.created_at,
        updated_at = EXCLUDED.updated_at
    """,
    data,
)

conn.commit()

log.info("Successfully write to postgres")

cur.close()
conn.close()
```
