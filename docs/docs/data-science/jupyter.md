---
title: Jupyter
---

## Jupyter magics
### Set max  in-line rows / cols
```python
import pandas as pd
pd.set_option('display.max_rows', 500)
pd.set_option('display.max_columns', 500)
pd.set_option('display.width', 1000)
```

### Auto refresh module
```python
%load_ext autoreload
%autoreload 2
```

## Convert to markdown
```bash
jupyter nbconvert refugees_swe_jekyll.ipynb --to markdown
```
