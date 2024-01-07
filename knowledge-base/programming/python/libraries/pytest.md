---
outline: deep
---

# Pytest

## Setup

```bash
# pip install pytest pytest-cov pytest-xdist

pipenv run pytest -n auto --cov-report html --cov=./
pipenv run pytest -n auto --cov-report term-missing --cov=./
```

## Cookbook

```python
import glob
import json
import timeit

import pytest

################################
# Prep input
################################
# assuming it's multiple single-line json files
files = glob.glob(FILEPATH, recursive=True)

events = []
for i in files:
    with open(i, "r") as f:
        events.extend([json.loads(i) for i in f.readlines()])
events = events[:5]  # comment this out to enable all testcases


################################
# Tests
################################
# need to manually delete the file if you want to clear existing logs
output = open("log.json", "a")


@pytest.mark.parametrize("event", events)
def test_success(event):
    print(f"id: {event['id']}")

    start = timeit.default_timer()
    # do something here
    stop = timeit.default_timer()

    ### logging response time
    logging_info = {
        "id": event["id"],
        "response_time": stop - start,
    }
    output.write(json.dumps(logging_info) + "\n")

    # add assertions here
```
