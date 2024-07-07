---
outline: deep
---

# Dagster

## Prune database

<https://github.com/dagster-io/dagster/discussions/12047>

```python
import datetime

from dagster import DagsterInstance, RunsFilter

instance = DagsterInstance.get()

# define the time threshold for what is old enough, this example uses 1 week
week_ago = datetime.datetime.now() - datetime.timedelta(days=7)

old_run_records = instance.get_run_records(
    filters=RunsFilter(created_before=week_ago),
    limit=10,  # limit how many are fetched at a time, perform this operation in batches
    ascending=True,  # start from the oldest
)

# in this simple example we delete serially
# for higher throughput you could parallelize with threads
for record in old_run_records:
    # delete all the database contents for this run
    instance.delete_run(record.dagster_run.run_id)
```
