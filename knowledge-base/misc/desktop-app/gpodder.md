---
outline: deep
---

# gpodder

```sql
SELECT *
FROM podcast AS p
WHERE p.title='The AskHistorians Podcast';

SELECT  *
FROM episode
WHERE podcast_id=7
AND DATE(published, 'unixepoch')>='2019-31-01'
ORDER BY published
;
```
