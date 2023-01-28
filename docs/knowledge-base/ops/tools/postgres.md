---
title: Postgres
---

## Administration

### Get activity log

```sql
SELECT usename,datname,count(*)
FROM pg_stat_activity
GROUP BY usename,datname;

SELECT pid, datname, usename, query_start, now() - query_start as runtime, query
FROM pg_stat_activity
ORDER BY runtime;
```

### Create user

```sql
CREATE DATABASE $DATABASE;
CREATE USER $USER WITH ENCRYPTED PASSWORD '$PASSWORD';
GRANT ALL PRIVILEGES ON DATABASE mydb TO $USER;
```

### Grant access

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA public TO user;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO user;
```

### Get table size

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

### See progress

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

### Terminate process

```sql
SELECT * FROM pg_stat_activity;
SELECT pg_terminate_backend(${PID});
```

### Permissions

```sql
-- admin
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO {ROLE};

-- readonly
GRANT SELECT ON all tables IN SCHEMA public TO {ROLE};

-- readonly-specific schema
GRANT SELECT ON {SCHEMA} TO {ROLE};
```

### Backup and restore

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

## Tools

- [pg_extras](https://github.com/pawurb/python-pg-extras/tree/master/pg_extras/queries) - various util queries
- [pgmonitor](https://github.com/CrunchyData/pgmonitor) - PostgreSQL Monitoring, Metrics Collection and Alerting Resources from Crunchy Data.
- [PostgreSQL Configurator](https://pgconfigurator.cybertec-postgresql.com/)

## Playground

- [Supabase WASM](https://wasm.supabase.com/) - PostgreSQL in the Browser


## Resources

- [Postgres Playground](https://www.crunchydata.com/developers/tutorials)
- [Postgres Tips & Tricks](https://www.crunchydata.com/postgres-tips)
