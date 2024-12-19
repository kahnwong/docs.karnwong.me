# requests

## Make requests

```python
# get
requests.get(url_en, params=payload)

# post
requests.post(url, headers=auth_headers, data=payload)
```

## Download a file

```python
import requests

filename = urlparse(url).path.split("/")[-1].replace("%20", " ")
f = requests.get(url)

with open(filename, "wb") as file_obj:
    file_obj.write(f.content)
```

## Extract params from url

```python
from urllib.parse import parse_qs, urlsplit

url = "http://www.example.org/default.html?ct=32&op=92&item=98"
query = urlsplit(url).query
parse_qs(query)
# {'item': ['98'], 'op': ['92'], 'ct': ['32']}
```

## Get token while exist

```python
response, token = get_report(analytics, dimension)
data = sanitize(response)

col_name = dimension.split(":")[-1]
push_to_mongo(data, col_name)
print("\tSuccessfully pushed to {}".format(col_name))

print(token)

while token:
    response, token = get_report(analytics, dimension, token)
    print(token)
    data = sanitize(response)

    col_name = dimension.split(":")[-1]
    push_to_mongo(data, col_name)
    print("\tSuccessfully pushed to {}".format(col_name))
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

## Misc

```python
# unquote
from urllib.parse import unquote

unquote(response.url)

# unescape
from html import unescape

unescape(
    "&#3607;&#3656;&#3629;&#3619;&#3632;&#3610;&#3634;&#3618;&#3609;&#3657;&#3635;"
)  # 'ท่อระบายน้ำ'

# split url
from urllib.parse import urlparse
```
