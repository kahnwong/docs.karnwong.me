---
outline: deep
---

# yaml

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
