# Python

## Pre-reqs for gcc on linux

```bash
# dockerfile
RUN apt update
RUN apt-get install libssl-dev python3-dev gcc libc-dev libxml2-dev libxslt1-dev zlib1g-dev g++ -y

# fresh ubuntu install
apt-get install build-essential g++ gcc libbz2-dev libc-dev liblzma-dev libncurses5-dev libncursesw5-dev libreadline-dev libsqlite3-dev libssl-dev libxml2-dev libxslt1-dev llvm make python3-dev tk-dev wget xz-utils zlib1g-dev -y
```

## Tools

- [grequests](https://github.com/spyoungtech/grequests) - GRequests: Asynchronous Requests.
- [icecream](https://github.com/gruns/icecream) - 🍦 Never use print() to debug again.
- [memray](https://github.com/bloomberg/memray) - Memray is a memory profiler for Python.
- [readability](https://github.com/buriy/python-readability) - fast python port of arc90's readability tool, updated to match latest readability.js!

## Code Quality
- [tach](https://docs.gauge.sh/getting-started/getting-started) - A Python tool to enforce dependencies.

## Resources

- [Python Readiness](https://pyreadiness.org/) - Python support graph for specific Python versions for the most popular Python packages!
- [CodingBat](https://codingbat.com/python) - Python exercises.
- [Breaking Packages in Python](https://dagster.io/blog/python-breaking-packages) - An exposé of the nooks and crannies of Python’s modules and packages.
