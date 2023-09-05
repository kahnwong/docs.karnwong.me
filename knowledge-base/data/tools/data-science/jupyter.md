---
outline: deep
---

# Jupyter

## Auto formatting

```python
!pip install jupyter-black

%load_ext jupyter_black
```

## Auto refresh module

```python
%load_ext autoreload
%autoreload 2
```

## Display JSON

```python
from IPython.display import JSON

JSON(
    {
        "a": [1, 2, 3, 4],
        "b": {"inner1": "helloworld", "inner2": "foobar"},
    }
)
```

## Load environment variables

```python
!pip install python-dotenv

%load_ext dotenv
%dotenv
```
