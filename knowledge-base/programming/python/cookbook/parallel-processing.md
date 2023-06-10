---
outline: deep
---

# Parallel processing

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
