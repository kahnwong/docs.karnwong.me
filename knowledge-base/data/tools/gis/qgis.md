---
outline: deep
---

# QGIS

## Config WFS

<https://gis.stackexchange.com/questions/390193/guide-on-configuring-wfs-on-qgis-server>

## Install M1-native build

Geoparquet is available if installed with this method.

```bash
pyenv install miniforge3-23.3.1-1
pyenv shell miniforge3-23.3.1-1
mamba create -n qgis
mamba install -c conda-forge qgis==3.30.0 libgdal-arrow-parquet -n qgis # need to pin qgis to prevent libqt5keychain error
```

### Usage

```bash
pyenv shell miniforge3-23.3.1-1
mamba run -n qgis qgis
```

## Useful Links

- [Invalid geometry reasons](https://docs.qgis.org/testing/en/docs/user_manual/processing_algs/qgis/vectorgeometry.html#types-of-error-messages-and-their-meanings)
