---
outline: deep
---

# GeoPandas

## I/O

### Create gdf from df

```python
import geopandas as gpd
import pandas as pd
from shapely.geometry import Point

project = pd.read_csv("project.csv")
project

geometry = [Point(xy) for xy in zip(project.longitude, project.latitude)]
crs = {"init": "epsg:4326"}
project = gpd.GeoDataFrame(project, crs=crs, geometry=geometry)
```

### Change projection

```python
geometry = [Point(xy) for xy in zip(input_df.longitude, input_df.latitude)]
input_df = gpd.GeoDataFrame(input_df, geometry=geometry).set_crs(epsg=4326)
```

### Read

```python
gpd.read_file(i, driver="GeoJson")
```

### Write

```python
df.to_file(out_path, driver="GeoJSONSeq")
```

## Make square grid

```python
import geopandas as gpd
import numpy as np
from shapely.geometry import Polygon


urban = gpd.read_file("urban_175m.shp")
xmin, ymin, xmax, ymax = urban.total_bounds

length = 0.00157
width = 0.00157

# cols = list(range(int(np.floor(xmin)), int(np.ceil(xmax)), wide))
cols = np.arange(xmin, xmax, length).tolist()
# rows = list(range(int(np.floor(ymin)), int(np.ceil(ymax)), lenght))
rows = np.arange(ymin, ymax, width).tolist()
rows.reverse()

polygons = []
for x in cols:
    for y in rows:
        polygons.append(
            Polygon([(x, y), (x + wide, y), (x + wide, y - lenght), (x, y - lenght)])
        )

g = gpd.GeoDataFrame(
    {"data1": list(range(len(polygons))), "data2": list(range(10, 10 + len(polygons)))},
    geometry=polygons,
    crs={"init": "epsg:4326"},
)
g.to_file("temp.shp")
```
