---
title: Modules
---

## Pre-reqs for gcc on linux
```bash
# docker
RUN apt update
RUN apt-get install libssl-dev python3-dev gcc libc-dev libxml2-dev libxslt1-dev zlib1g-dev g++ -y

# fresh ubuntu install
apt-get install build-essential g++ gcc libbz2-dev libc-dev liblzma-dev libncurses5-dev libncursesw5-dev libreadline-dev libsqlite3-dev libssl-dev libxml2-dev libxslt1-dev llvm make python3-dev tk-dev wget xz-utils zlib1g-dev -y
```

## Modules List
### CLI
`pip3 install topydo topydo[columns]`

### Visualizations
```
conda install plotly
jupyter labextension install @jupyterlab/plotly-extension
```
