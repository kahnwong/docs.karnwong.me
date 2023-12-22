---
outline: deep
---

# QGIS

## Config WFS

<https://gis.stackexchange.com/questions/390193/guide-on-configuring-wfs-on-qgis-server>

## Install M1-native build

Geoparquet is available if installed with this method.

```bash
pyenv install mambaforge-22.9.0-3
pyenv shell mambaforge-22.9.0-3
mamba create -n qgis
mamba install -c conda-forge qgis libgdal-arrow-parquet -n qgis
```

### Usage

```bash
pyenv shell mambaforge-22.9.0-3
mamba run -n qgis qgis
```

## Useful Links

- [Invalid geometry reasons](https://docs.qgis.org/testing/en/docs/user_manual/processing_algs/qgis/vectorgeometry.html#types-of-error-messages-and-their-meanings)
