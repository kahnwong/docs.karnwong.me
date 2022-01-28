---
title: Environment
---

## [pyenv](https://github.com/pyenv/pyenv)

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

## pipenv

```bash
# pipenv to requirements.txt
jq -r '.default | to_entries[] | .key + .value.version ' Pipfile.lock > requirements.txt

# install from requirements.txt
pipenv install -r requirements.txt
```
