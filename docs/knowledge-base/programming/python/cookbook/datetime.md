---
title: Datetime
---

## Parsing

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

## Generate day bound

```python
os.environ["TZ"] = "Asia/Bangkok"

day_lower_th = parse(day)
utc = pytz.timezone("UTC")

# bounds (now in UTC)
day_lower = day_lower_th.astimezone(utc)
day_upper = day_lower + timedelta(days=1)
```

## Find elapsed time

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

## Countdown function

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

## Time decorator

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
