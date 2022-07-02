---
title: Python
---

## Pre-reqs for gcc on linux

```bash
# docker
RUN apt update
RUN apt-get install libssl-dev python3-dev gcc libc-dev libxml2-dev libxslt1-dev zlib1g-dev g++ -y

# fresh ubuntu install
apt-get install build-essential g++ gcc libbz2-dev libc-dev liblzma-dev libncurses5-dev libncursesw5-dev libreadline-dev libsqlite3-dev libssl-dev libxml2-dev libxslt1-dev llvm make python3-dev tk-dev wget xz-utils zlib1g-dev -y
```

## Environment

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

## Libraries

- [icecream](https://github.com/gruns/icecream) - 🍦 Never use print() to debug again.
- [memray](https://github.com/bloomberg/memray) - Memray is a memory profiler for Python.
- [moto](https://github.com/spulec/moto) - A library that allows you to easily mock out tests based on AWS infrastructure.
- [typer](https://github.com/tiangolo/typer) - Typer, build great CLIs. Easy to code. Based on Python type hints.
- [pyscript](https://github.com/pyscript/pyscript) - PyScript is a Pythonic alternative to Scratch, JSFiddle, and other "easy to use" programming frameworks, with the goal of making the web a friendly, hackable place where anyone can author interesting and interactive applications.

## Resources

### Learning

- [CodingBat](https://codingbat.com/python) - Python exercises.
