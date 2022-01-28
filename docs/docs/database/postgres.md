---
title: Postgres
---

various util queries: https://github.com/pawurb/python-pg-extras/tree/master/pg_extras/queries

## Get activity log
```sql
SELECT usename,datname,count(*)
FROM pg_stat_activity
GROUP BY usename,datname;

SELECT pid, datname, usename, query_start, now() - query_start as runtime, query
FROM pg_stat_activity
order by runtime;
```

## Get table size
```sql
SELECT
    table_name,
    pg_relation_size(quote_ident(table_name)),
    pg_size_pretty(pg_relation_size(quote_ident(table_name)))
FROM
    information_schema.tables
WHERE
    table_schema = 'public'
ORDER BY
    pg_total_relation_size(quote_ident(table_name)) DESC;
```

## See progress
```sql
SELECT n_live_tup, n_dead_tup, relname FROM pg_stat_all_tables;

SELECT relname, seq_scan, n_live_tup, n_dead_tup, n_tup_del, last_autovacuum, last_autoanalyze, autovacuum_count, autovacuum_count FROM pg_stat_user_tables;

SELECT
   p.phase,
   p.blocks_total,
   p.blocks_done,
        p.blocks_total - p.blocks_done as blocks_left,
   p.tuples_total,
   p.tuples_done,
   ai.schemaname,
   ai.relname,
   ai.indexrelname
FROM pg_stat_progress_create_index p
JOIN pg_stat_activity a ON p.pid = a.pid
LEFT JOIN pg_stat_all_indexes ai on ai.relid = p.relid AND ai.indexrelid = p.index_relid;
```

## Terminate process
```sql
SELECT * FROM pg_stat_activity;
SELECT pg_terminate_backend(${PID});
```

## Permissions
```sql
-- admin
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO {ROLE};

-- readonly
GRANT SELECT ON all tables IN SCHEMA public TO {ROLE};

-- readonly-specific schema
GRANT SELECT ON {SCHEMA} TO {ROLE};
```

## Backup and restore
```bash
# backup
$ pg_dump --host HOST --port 5432 --username USERNAME --format plain --verbose --file OUTFILE.sql --table public.TABLE_NAME DB_NAME
$ psql --host HOST --port 5432 --username USERNAME -d DB_NAME < BACKUP.sql

## another variant
# compression rate: 10x
$ pg_dump -Fc -c -h HOST -U USERNAME -d DB_NAME > OUTFILE.sql.gz
$ pg_restore -h HOST -U USERNAME -d DB_NAME -C -c BACKUP.sql.gz
```

## PSQL
```bash
# list tables
\dt

# list column dtypes
\d+ table_name

# list indexes and size
\di+ {INDEX_PREFIX}*

# select database
\c {DB_NAME}

# login
psql -h HOST -d DB_NAME -U USER

# export to csv
psql -U user -d db_name -c "Copy (Select * From foo_table LIMIT 10) To STDOUT With CSV HEADER DELIMITER E'\t';" > foo_data.tsv

# export from pgcli
db> \copy (SELECT  * FROM district_boundary) TO '~/Downloads/file.tsv' WITH (FORMAT CSV, HEADER, DELIMITER E'\t')
```

## SQL
### CRUD
```sql
-- rename table
ALTER TABLE OG_NAME rename TO NEW_NAME;
```

### Transformations
```sql
-- cast string to datetime
TO_TIMESTAMP(date_created,'YYYY-MM-DD HH:MI:SS')

-- cast datetime to strong
to_char(timestamp_column, 'YYYY-MM')

-- timedelta
WHERE date_created < (NOW() - '3 months'::interval)::TEXT
```

### CTE
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
