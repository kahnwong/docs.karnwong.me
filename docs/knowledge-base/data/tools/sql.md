---
title: SQL
---

## CRUD

```sql
-- rename table
ALTER TABLE OG_NAME rename TO NEW_NAME;
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

## CTE

A common table expression is a temporary result set which you can reference within another SQL statement including SELECT, INSERT, UPDATE or DELETE.

```sql
WITH cte_film AS (
    SELECT
        film_id,
        title,
        (CASE
            WHEN length < 30 THEN 'Short'
            WHEN length < 90 THEN 'Medium'
            ELSE 'Long'
        END) length
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
