---
title: Modules
---

## Pre-reqs for gcc on linux
```bash
RUN apt update
RUN apt-get install libssl-dev python3-dev gcc libc-dev libxml2-dev libxslt1-dev zlib1g-dev g++ -y
```

## Modules List
### CLI
`pip3 install topydo topydo[columns] youtube-dlc fava visidata pipenv`

### Visualizations
```
conda install plotly
jupyter labextension install @jupyterlab/plotly-extension
```
