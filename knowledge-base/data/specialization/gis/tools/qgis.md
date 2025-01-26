---
outline: deep
---

# QGIS

## Config WFS

<https://gis.stackexchange.com/questions/390193/guide-on-configuring-wfs-on-qgis-server>

## Install ARM Mac build

Geoparquet is available if installed with this method.

```bash
curl -fsSL https://pixi.sh/install.sh | bash
pixi global install qgis
```

## Add pmtiles

```bash
v = QgsVectorLayer("/vsicurl/https://pycsw.nina.no/media/maps/sources/30/02_Fritidsbebyggelse.pmtiles", "layer", "ogr")
QgsProject.instance().addMapLayer(v)
```

## Useful Links

- [Invalid geometry reasons](https://docs.qgis.org/testing/en/docs/user_manual/processing_algs/qgis/vectorgeometry.html#types-of-error-messages-and-their-meanings)
