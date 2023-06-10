---
outline: deep
---

# Web Scraping

## Formdata & payload

```bash title="formdata"
POST /some-path HTTP/1.1
Content-Type: application/x-www-form-urlencoded

# output
foo=bar&name=John
```

```bash title="payload"
POST /some-path HTTP/1.1
Content-Type: application/json

# output
{ "foo" : "bar", "name" : "John" }
```

## Tools

- [curlconverter](https://curl.trillworks.com) - convert curl commands to Python, JavaScript, PHP, R, Go, Rust, Dart, JSON, Ansible, Elixir.
- [ratelimiter](https://github.com/RazerM/ratelimiter) - Simple Python module providing rate limiting.

## Resources

- [Avoiding bot detection: How to scrape the web without getting blocked?](https://github.com/niespodd/browser-fingerprinting)
- [HTTP Status Codes](https://apps.moire.org/httpstatus/)
- [HTTP Status Dogs](https://httpstatusdogs.com/) - Hypertext Transfer Protocol Response status codes. And dogs.
- [HTTP Cats](https://httpcats.com/) - Cats for every HyperText Transfer Protocol response status code.
