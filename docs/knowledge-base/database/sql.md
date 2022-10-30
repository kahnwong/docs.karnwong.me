---
title: SQL
---

## SELECT, FROM, LIMIT

```sql
SELECT *
FROM crm
LIMIT 10;
```

## WHERE

```sql
SELECT *
FROM crm
WHERE register_date > '2020-01-01'
LIMIT 10;
```

## AND

```sql
SELECT *
FROM crm
WHERE register_date > '2020-01-01'
    AND is_priority=true
LIMIT 10;
```

## IN

```sql
SELECT user_id, last_activity, segment
FROM crm
WHERE segment in ('foo', 'bar');
```

## ORDER BY

```sql
SELECT *
FROM crm
WHERE register_date > '2020-01-01'
ORDER BY register_date
LIMIT 10;
```

## DISTINCT

```sql
SELECT DISTINCT(segment)
FROM crm;
```

## JOIN (+ inner, left, right)

```sql
SELECT *
FROM products as p
JOIN stock as s
	ON p.product_id=s.product_id
LIMIT 10;
```

## GROUP BY, AVG, COUNT, SUM, MIN, MAX, AS

```sql
SELECT segment, AVG(stayonpage) AS avg_stayonpage
FROM crm
GROUP BY segment
LIMIT 10;
```
