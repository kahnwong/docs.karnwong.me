# Python

## Pre-reqs for gcc on linux

```bash
# docker
RUN apt update
RUN apt-get install libssl-dev python3-dev gcc libc-dev libxml2-dev libxslt1-dev zlib1g-dev g++ -y

# fresh ubuntu install
apt-get install build-essential g++ gcc libbz2-dev libc-dev liblzma-dev libncurses5-dev libncursesw5-dev libreadline-dev libsqlite3-dev libssl-dev libxml2-dev libxslt1-dev llvm make python3-dev tk-dev wget xz-utils zlib1g-dev -y
```

## Virtual Environment

### [pyenv](https://github.com/pyenv/pyenv)

```bash
# install
brew install pyenv pyenv-virtualenv

# lisit available python versions
pyenv install --list

# install specific version
pyenv install 3.8.0

# list installed versions
pyenv versions

# activate new env
pyenv shell 3.8.0 # support multiple version

# config venv
pyenv virtualenv 3.8.0 my-data-project

# set env per folder/project
pyenv local my-data-project
```

### pipenv (legacy, don't use this)

```bash
# pipenv to requirements.txt
jq -r '.default | to_entries[] | .key + .value.version ' Pipfile.lock > requirements.txt

# install from requirements.txt
pipenv install -r requirements.txt
```

### poetry

```bash
# init project
poetry init

# add deps
poetry add $package

# add dev dependencies
poetry add $package --group dev

# activate venv
poetry shell

# specify python version
poetry env use 3.11 # normally it picks up global python via pyenv
```

#### Include `src` folder

```toml
[tool.poetry]
packages = [
    {include = "src"}
]
```

#### pre-commit config for subfolders

```yaml
  - repo: https://github.com/python-poetry/poetry
    rev: 1.7.1
    hooks:
      - id: poetry-check
        args: ["-C", "./app"]
      - id: poetry-lock
        args: ["-C", "./app"]
      - id: poetry-export
        args: ["-C", "./app", "--without-hashes", "-f", "requirements.txt", "-o", "requirements.txt"]
```

#### Cookbook

```bash
# remove lock file
find ~/.cache/pypoetry -name '*.lock' -type f -delete

## or
poetry env remove --all
poetry cache clear --all .
rm -rf $(poetry config cache-dir)/artifacts

# keyring not working correctly on Ubuntu
export PYTHON_KEYRING_BACKEND=keyring.backends.null.Keyring
```

## Tools

- [grequests](https://github.com/spyoungtech/grequests) - GRequests: Asynchronous Requests.
- [icecream](https://github.com/gruns/icecream) - 🍦 Never use print() to debug again.
- [memray](https://github.com/bloomberg/memray) - Memray is a memory profiler for Python.
- [moto](https://github.com/spulec/moto) - A library that allows you to easily mock out tests based on AWS infrastructure.
- [readability](https://github.com/buriy/python-readability) - fast python port of arc90's readability tool, updated to match latest readability.js!
- [typer](https://github.com/tiangolo/typer) - Typer, build great CLIs. Easy to code. Based on Python type hints.

## Resources

- [Python Readiness](https://pyreadiness.org/) - Python support graph for specific Python versions for the most popular Python packages!
- [CodingBat](https://codingbat.com/python) - Python exercises.
- [pyroad](https://github.com/amaargiru/pyroad) - Detailed Python developer roadmap.
- [Python Readiness](https://pyreadiness.org) - Python support graph for specific Python versions for the most popular Python packages!
- [Breaking Packages in Python](https://dagster.io/blog/python-breaking-packages) - An exposé of the nooks and crannies of Python’s modules and packages.
