---
title: Scrapy
---

## Tools
- [Curl to Scrapy traslator](https://michael-shub.github.io/curl2scrapy/)
- [curlconverter](https://curl.trillworks.com) - convert curl commands to Python, JavaScript, PHP, R, Go, Rust, Dart, JSON, Ansible, Elixir.
- [ratelimiter](https://github.com/RazerM/ratelimiter) - Simple Python module providing rate limiting.
- [Scrapy S3 Pipeline](https://github.com/orangain/scrapy-s3pipeline) - Scrapy pipeline to store chunked items into Amazon S3 or Google Cloud Storage bucket.

## Spider
```python
import scrapy

class SampleSpider(scrapy.Spider):
    name = "sample"

    start_urls = ['a', 'b', 'c']

    def parse(self, response):
        # parse here

        yield i
```

### Override / add settings
```python
custom_settings = {
        'SOME_SETTING': 'some value',
    }
```

## Make requests
### GET
```python
yield scrapy.Request(
    url=url,
    cookies=cookies,
    callback=self.add_coordinates,
    meta={'data': j}
    )
```

```python title="formdata"
yield scrapy.FormRequest(
    url=url,
    method='GET',
    dont_filter=True,
    formdata=payload,
    meta={
        'facetFilters': facetFilter,
        'numericFilters': numericFilter
    },
    callback=self.get_each_page)
```

### POST
```python
yield scrapy.Request(url=start_url,
    method='POST',
    body=json.dumps(payload),
    headers={'Content-Type':'application/json'},
    callback=self.get_cities
)
```

```python title="formdata"
yield scrapy.FormRequest(
    'api.example.com',
    callback=self.parse,
    method='POST',
    formdata=params
)
```

## Pipelines
### Write as single-line JSON
```python
import json

from itemadapter import ItemAdapter

class JsonWriterPipeline:

    def open_spider(self, spider):
        self.file = open('items.jl', 'w')

    def close_spider(self, spider):
        self.file.close()

    def process_item(self, item, spider):
        line = json.dumps(ItemAdapter(item).asdict(), default=str) + "\n"
        self.file.write(line)
        return item
```


## Middleware
### Custom downloader
```python title=middleware.py
from scrapy.http import HtmlResponse

import cloudscraper

    def process_request(self, request, spider):
        # Called for each request that goes through the downloader
        # middleware.

        # Must either:
        # - return None: continue processing this request
        # - or return a Response object
        # - or return a Request object
        # - or raise IgnoreRequest: process_exception() methods of
        #   installed downloader middleware will be called
        # return None

        if spider.name=='spider_name':
            scraper = cloudscraper.create_scraper()
            r = scraper.get(request.url)
            body = r.content
            response = HtmlResponse(url=request.url, body=body)

            return response
```

## shell
### Set header for shell
```python
$ scrapy shell
>>> from scrapy import Request
>>> req = Request('yoururl.com', headers={"header1":"value1"})
>>> fetch(req)
```

### Use local html file
```
scrapy shell file:///path/to/file.html
```


## Misc
```python
# change response encoding
response.replace(encoding='utf-8')
```
