---
outline: deep
---

# SQL

## Basic syntax

### SELECT, FROM, LIMIT

```sql
SELECT
  *
FROM
  crm
LIMIT
  10;
```

### WHERE

```sql
SELECT
  *
FROM
  crm
WHERE
  register_date > '2020-01-01'
LIMIT
  10;
```

### AND

```sql
SELECT
  *
FROM
  crm
WHERE
  register_date > '2020-01-01'
  AND is_priority = true
LIMIT
  10;
```

### IN

```sql
SELECT
  user_id,
  last_activity,
  segment
FROM
  crm
WHERE
  segment in ('foo', 'bar');
```

### ORDER BY

```sql
SELECT
  *
FROM
  crm
WHERE
  register_date > '2020-01-01'
ORDER BY
  register_date
LIMIT
  10;
```

### DISTINCT

```sql
SELECT DISTINCT
  (segment)
FROM
  crm;
```

### JOIN (+ inner, left, right)

```sql
SELECT
  *
FROM
  products as p
  JOIN stock as s ON p.product_id = s.product_id
LIMIT
  10;
```

### GROUP BY, AVG, COUNT, SUM, MIN, MAX, AS

```sql
SELECT
  segment,
  AVG(stayonpage) AS avg_stayonpage
FROM
  crm
GROUP BY
  segment
LIMIT
  10;
```

## Transformations

```sql
-- cast string to datetime
TO_TIMESTAMP(date_created,'YYYY-MM-DD HH:MI:SS')

-- cast datetime to strong
to_char(timestamp_column, 'YYYY-MM')

-- timedelta
WHERE date_created < (NOW() - '3 months'::interval)::TEXT
```

## CRUD

```sql
-- rename table
ALTER TABLE OG_NAME
rename TO NEW_NAME;
```

## CTE

A common table expression is a temporary result set which you can reference within another SQL statement including SELECT, INSERT, UPDATE or DELETE.

```sql
WITH
  cte_film AS (
    SELECT
      film_id,
      title,
      (
        CASE
          WHEN length < 30 THEN 'Short'
          WHEN length < 90 THEN 'Medium'
          ELSE 'Long'
        END
      ) length
    FROM
      film
  )
SELECT
  film_id,
  title,
  length
FROM
  cte_film
WHERE
  length = 'Long'
ORDER BY
  title;
```

## Resources

- [Mode SQL Tutorial](https://mode.com/sql-tutorial/)
- [SQL Style Guide](https://about.gitlab.com/handbook/business-technology/data-team/platform/sql-style-guide/)
- [SQLBolt](https://sqlbolt.com) - Learn SQL with simple, interactive exercises.
