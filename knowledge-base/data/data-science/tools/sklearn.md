---
outline: deep
---

# sklearn

## Test snippet

```python
import numpy as np
from sklearn.naive_bayes import GaussianNB

X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])
Y = np.array([1, 1, 1, 2, 2, 2])

clf = GaussianNB()
clf.fit(X, Y)

### save model artifact
import joblib

joblib.dump(MODEL, FILENAME)
```

## Visualize dataset cluster via t-nse

```python
from sklearn.manifold import TSNE
import seaborn as sns

import warnings

warnings.simplefilter(action="ignore")

#####################
for i in categ_columns:
    df[i] = df[i].astype("category").cat.codes

tsne = TSNE()
X_embedded = tsne.fit_transform(df[numer_columns])

#####################
sns.set(rc={"figure.figsize": (11.7, 8.27)})
sns.scatterplot(
    X_embedded[:, 0], X_embedded[:, 1], hue=df["PACKAGENAME"], legend="full"
)
```
