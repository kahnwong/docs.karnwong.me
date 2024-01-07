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

## Bulk write

```python
import json
import os

import dotenv
import psycopg2
import requests
from psycopg2.extras import execute_values
from retrying import retry

dotenv.load_dotenv()

##############
# fetch data
##############
print("fetching data...")


@retry(
    wait_exponential_multiplier=1000,
    wait_exponential_max=10000,
    stop_max_attempt_number=5,
)
def make_request():
    url = "https://example.com"

    payload = json.dumps({"flagload": "F"})
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f'Bearer {os.getenv("BEARER_ACCESS_TOKEN")}',
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    response.raise_for_status()  # Raise an HTTPError for bad responses (4xx and 5xx status codes)

    return response.json()


try:
    response = make_request()
    print("Request successful")
except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")


# ## temp
# import pickle
# with open('data.pickle', 'wb') as f:
#     pickle.dump(response, f)

##############
# write to db
##############
# ## temp
# import pickle
# with open('data.pickle' , 'rb') as f:
#     response = pickle.load(f)

TABLE_NAME = "employee"
COLUMN_NAMES = (
    "foo",
    "bar",
)


ON_CONFLICT_COLUMN = "foo"

# CREATE TABLE employee (
#     foo VARCHAR(255) PRIMARY KEY,
#     bar VARCHAR(255)
# );

# response = response[:2] # debug
data = response


connection_params = {
    "host": os.getenv("DB_HOSTNAME"),
    "user": os.getenv("DB_USERNAME"),
    "password": os.getenv("DB_PASSWORD"),
    "database": os.getenv("DB_NAME"),
    "port": os.getenv("DB_PORT"),
}

print("inserting...")
with psycopg2.connect(**connection_params) as conn:
    with conn.cursor() as cursor:
        sql_query = f"""
            INSERT INTO {TABLE_NAME} ({', '.join(COLUMN_NAMES)})
            VALUES %s
            ON CONFLICT ({ON_CONFLICT_COLUMN}) DO UPDATE
            SET({', '.join(COLUMN_NAMES)}) = ROW(excluded.*)
        """

        print(sql_query)

        # Use execute_values to perform bulk insert
        execute_values(
            cursor,
            sql_query,
            data,
            template=f"({', '.join(['%s' for i in range(len(COLUMN_NAMES))])})",
        )

        # Commit the transaction
        conn.commit()

print("successfully inserted")
```
