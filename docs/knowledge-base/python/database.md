---
title: Database
---

## psycopg2

### Usage

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
