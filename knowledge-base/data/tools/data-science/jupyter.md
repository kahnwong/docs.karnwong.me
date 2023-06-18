---
outline: deep
---

# Jupyter

## Jupyter magic

### Autocomplete

```python
!pip install jupyterlab_tabnine
```

### Auto formatting

```python
!pip install jupyter-black

%load_ext jupyter_black
```

### Auto refresh module

```python
%load_ext autoreload
%autoreload 2
```

### Display JSON

```python
from IPython.display import JSON

JSON(
    {
        "a": [1, 2, 3, 4],
        "b": {"inner1": "helloworld", "inner2": "foobar"},
    }
)
```

### Load environment variables

```python
!pip install python-dotenv

%load_ext dotenv
%dotenv
```

## Logging

```python
import logging
import sys

logging.basicConfig(
    format="%(asctime)s | %(levelname)s : %(message)s",
    level=logging.INFO,
    stream=sys.stdout,
)

logging.info("Hello world!")
```
