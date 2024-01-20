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

### pipenv

```bash
# pipenv to requirements.txt
jq -r '.default | to_entries[] | .key + .value.version ' Pipfile.lock > requirements.txt

# install from requirements.txt
pipenv install -r requirements.txt
```

### poetry

#### Include `src` folder

```toml
[tool.poetry]
packages = [
    {include = "src"}
]
```

## Tools

- [grequests](https://github.com/spyoungtech/grequests) - GRequests: Asynchronous Requests.
- [icecream](https://github.com/gruns/icecream) - 🍦 Never use print() to debug again.
- [memray](https://github.com/bloomberg/memray) - Memray is a memory profiler for Python.
- [moto](https://github.com/spulec/moto) - A library that allows you to easily mock out tests based on AWS infrastructure.
- [typer](https://github.com/tiangolo/typer) - Typer, build great CLIs. Easy to code. Based on Python type hints.

## Resources

- [Python Readiness](https://pyreadiness.org/) - Python support graph for specific Python versions for the most popular Python packages!
- [CodingBat](https://codingbat.com/python) - Python exercises.
- [pyroad](https://github.com/amaargiru/pyroad) - Detailed Python developer roadmap.
