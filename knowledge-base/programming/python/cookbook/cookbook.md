---
outline: deep
---

# Cookbook

## Load env

```python
# pip install python-dotenv

import yaml

load_dotenv()
```

## Exception

### Print stacktrace

```python
try:
    print("Hello")
except Exception as e:
    import traceback

    error_msg = "".join(
        traceback.format_exception(etype=type(e), value=e, tb=e.__traceback__)
    )
    print(error_msg)
```

## Dict

```python
# sort dict based on value
sorted(list_to_be_sorted, key=lambda k: k["name"])

# find key diff
list(set(keep_keys) - set(input_keys))
```

## List

```python
### split list every n chunk
[data[x : x + 100] for x in range(0, len(data), 100)]
```

## I/O

```python
# read CSV as dict
with open("params.csv", "r") as csvfile:
    reader = csv.DictReader(csvfile)
    data = [dict(i) for i in reader]
```

## Logging

### Default

```python
import logging


def init_logger(name: str, level: int = logging.INFO):
    logger = logging.getLogger(name)
    handler = logging.StreamHandler()

    formatter = logging.Formatter(
        "%(asctime)s - [%(levelname)s] - %(name)s - %(funcName)s - %(message)s"
    )
    handler.setFormatter(formatter)
    logger.addHandler(handler)

    logger.setLevel(level)

    return logger
```

```python
from python_api_template.utils.log import init_logger

logger = init_logger(__name__)
```

### AWS Lambda

#### powertools

```python
from aws_lambda_powertools import Logger

logger = Logger()  # Sets service via env var
# OR logger = Logger(service="example")
```

#### built-in logger

```python
import logging

# https://stackoverflow.com/questions/37703609/using-python-logging-with-aws-lambda
if logging.getLogger().hasHandlers():
    # The Lambda environment pre-configures a handler logging to stderr. If a handler is already configured,
    # `.basicConfig` does not execute. Thus we set the level directly.
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    print("lambda log")
else:
    logger = logging.getLogger(__name__)
    handler = logging.StreamHandler()

    formatter = logging.Formatter(
        "%(asctime)s - [%(levelname)s] - %(name)s - %(message)s"
    )
    handler.setFormatter(formatter)
    logger.addHandler(handler)

    logger.setLevel(logging.INFO)
    print("local log")
```

## Regex

```python
import re

regex = r"[0-9,\.]+"
numbers = re.search(regex, str).group(0).replace(",", "")
```

## Sys

```python
# add prefix for system path
import sys

sys.path.insert(0, "../..")
```

## Run code from invoking the script directly

```python
if __name__ == "__main__":
    print("Hello")
```

## profiling

```bash
python -m cProfile -s cumulative some-code.py
```

## argparse

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--input_path")
parser.add_argument("--experiment_id")
args = parser.parse_args()

input_path = args.input_path
experiment_id = int(args.experiment_id)
```
