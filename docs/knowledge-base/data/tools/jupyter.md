---
title: Jupyter
---

## Jupyter magic

### Set max in-line rows / cols

```python
import pandas as pd

pd.set_option("display.max_rows", 500)
pd.set_option("display.max_columns", 500)
pd.set_option("display.width", 1000)
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

### Auto refresh module

```
%load_ext autoreload
%autoreload 2
```

### Auto formatting

```
!pip install nb_black

%load_ext lab_black
```

### Autocomplete

```
!pip install jupyterlab_tabnine
```

### Load environment variables

```
!pip install python-dotenv

%load_ext dotenv
%dotenv
```

## Convert to markdown

```bash
jupyter nbconvert notebook.ipynb --to markdown
```

## Jupyter logging

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
