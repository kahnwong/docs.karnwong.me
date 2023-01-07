---
title: Snippets
---

## List

```python
### split list every n chunk
[data[x : x + 100] for x in range(0, len(data), 100)]
```

## CSV

```python
# read CSV as dict
with open("params.csv", "r") as csvfile:
    reader = csv.DictReader(csvfile)
    data = [dict(i) for i in reader]
```

## Regex

### Usage

```python
import re

regex = r"[0-9,\.]+"
numbers = re.search(regex, str).group(0).replace(",", "")
```

### Lookahead & lookbehind

Given the string `foobarbarfoo`

| Regex       | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| bar(?=bar)  | finds the 1st bar ("bar" which has "bar" after it)            |
| bar(?!bar)  | finds the 2nd bar ("bar" which does not have "bar" after it)  |
| (?<=foo)bar | finds the 1st bar ("bar" which has "foo" before it)           |
| (?<!foo)bar | finds the 2nd bar ("bar" which does not have "foo" before it) |

## Datetime

### Parsing

```python
# get current datetime in specified tz
datetime.now(timezone("Asia/Bangkok"))

# to string
datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# from string
datetime.strptime(datetime.now(), "%Y-%m-%d")

# from epoch timestamp
datetime.fromtimestamp(1347517370 / 1000)  # /1000 in case of ValueError
```

### Generate day bound

```python
os.environ["TZ"] = "Asia/Bangkok"

day_lower_th = parse(day)
utc = pytz.timezone("UTC")

# bounds (now in UTC)
day_lower = day_lower_th.astimezone(utc)
day_upper = day_lower + timedelta(days=1)
```

## Threading

```python
from multiprocessing.dummy import Pool as ThreadPool

pool = ThreadPool(8)
results = pool.map(crunch, texts[:20])

pool.close()
pool.join()
```

```python
from multiprocessing import Pool


def f(x):  # function BEFORE Pool
    return x * x


p = Pool(5)
p.map(f, [1, 2, 3])
```

## Time

### Find elapsed time

```python
import time

start_time = time.time()

# ... do stuff

end_time = time.time()
print("Elapsed time was %g seconds" % (end_time - start_time))
```

```python
import timeit

start = timeit.default_timer()
# Your statements here
stop = timeit.default_timer()
print("Time: ", stop - start)
```

### Countdown function

```python
def countdown(t):
    print("--- SLEEP ---")
    while t:
        mins, secs = divmod(t, 60)
        timeformat = "{:02d}:{:02d}".format(mins, secs)
        print(timeformat, end="\r")
        sleep(1)
        t -= 1
```

### Time decorator

```python
from horology import timed  # pip install horology


@timed  # put this line above ALL functions
def compute_magic(n):
    counter = 0
    for i in range(n):
        counter += i

    print(counter)
    return counter


compute_magic(10000000)

# output
# compute_magic: 681.55 ms
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

## Logging

```python
import logging


# https://stackoverflow.com/questions/37703609/using-python-logging-with-aws-lambda
if logging.getLogger().hasHandlers():
    # The Lambda environment pre-configures a handler logging to stderr. If a handler is already configured,
    # `.basicConfig` does not execute. Thus we set the level directly.
    log = logging.getLogger()
    log.setLevel(logging.INFO)
    print("local log")
else:
    import logging as log

    log.basicConfig(format="%(asctime)s - [%(levelname)s] %(message)s", level=log.DEBUG)
    print("lambda log")
```

## Subprocess

### Return stdout stream

```python
import subprocess


procExe = subprocess.Popen(
    ".//run.sh",
    shell=True,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    universal_newlines=True,
)

while procExe.poll() is None:
    line = procExe.stdout.readline()
    st.write(line)
```

## yaml

`pip install pyyaml`

```python
# read
with open(filename, "r") as f:
    try:
        d = yaml.safe_load(f)
    except yaml.YAMLError as e:
        print(e)

# write
with open(out_file, "w") as yml:
    yaml.dump(schema, yml, allow_unicode=True, sort_keys=False)
```

## pytest

```bash
# pip install pytest pytest-cov pytest-xdist

pipenv run pytest -n auto --cov-report html --cov=./
pipenv run pytest -n auto --cov-report term-missing --cov=./
```

### Template

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

## profiling

```bash
python -m cProfile -s cumulative some-code.py
```

## argparse

```python
import argparse


parser = argparse.ArgumentParser()
parser.add_argument("day", help="pipeline run date in `xxxx-xx-xx` format")
args = parser.parse_args()

day = args.day
```
