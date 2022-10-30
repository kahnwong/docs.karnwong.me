---
title: Web Scraping
---

## Resources

- [Avoiding bot detection: How to scrape the web without getting blocked?](https://github.com/niespodd/browser-fingerprinting)
- [HTTP Status Codes](https://apps.moire.org/httpstatus/)

## Formdata & payload

```title="formdata"
POST /some-path HTTP/1.1
Content-Type: application/x-www-form-urlencoded

# output
foo=bar&name=John
```

```title="payload"
POST /some-path HTTP/1.1
Content-Type: application/json

# output
{ "foo" : "bar", "name" : "John" }
```

## Fetching cookies

```python
import requests


headers = {}
url = ""

r = requests.get(url, headers=headers, verify=False)
# print(r.cookies)
session_id = r.cookies["PHPSESSID"]
```
