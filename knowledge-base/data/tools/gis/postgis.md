---
outline: deep
---

# PostGIS

## Init

```sql
CREATE EXTENSION postgis;
```

## SQL

### Add GEOM column

```sql
-- use `ST_GeomFromText` for `WKT`
ALTER TABLE province ADD COLUMN geom geometry(Point, 4326);

UPDATE province
SET geom = ST_SetSRID(
    ST_MakePoint(
        cast(longitude AS DOUBLE PRECISION),
        cast(latitude AS DOUBLE PRECISION)
        ),
    4326)
WHERE latitude IS NOT NULL AND longitude IS NOT NULL;
```

### Cast projection unit to meter

```sql
ST_Distance(
    geom::geography,
    ST_MakePoint(longitude,latitude)::geography) <= 3000
```

### Find polygon from point

```sql
-- single point
ST_DWithin(ST_SetSRID(ST_POINT(longitude,latitude),4326)::geography, geom,0)

 against another table
SELECT *
FROM a JOIN b
ON ST_WITHIN(points.geom, boundary.geom)
LIMIT 10;
```

### Find distance betwee x & y

```sql
-- unit depends on projection
ST_Distance(
    the_geom::geography,
    ST_MakePoint(longitude,latitude)::geography)
AS distance_from_holy_land
```

### Count points in polygon

```sql
SELECT boundary.gid, count(points.geom) AS totale
FROM boundary LEFT JOIN points
ON ST_CONTAINS(boundary.geom,points.geom)
GROUP BY boundary.gid;
```
