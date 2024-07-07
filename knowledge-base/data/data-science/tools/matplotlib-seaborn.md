---
outline: deep
---

# Matplotlib/Seaborn

## Init

```python
import matplotlib.pyplot as plt
import seaborn as sns

sns.set()
sns.set(font="Tahoma")

# if using only matplotlib
plt.rcParams["font.family"] = "cursive"
```

## Scatter / line plot

```python
fig = plt.figure(figsize=(10, 6))

sns.scatterplot(
    x="time",
    y="yield_rate",
    hue="neighborhood",
    #  palette=cmap,
    data=temp,
).set_title("yield rate per period")
```

## Multiplot

```python
g = sns.FacetGrid(tips, col="time")
g.map(plt.hist, "tip")
```

## Misc

```python
# Rotate axis title
plt.xticks(rotation=90)
```
