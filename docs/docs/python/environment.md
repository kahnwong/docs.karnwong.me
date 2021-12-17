---
title: Environment
---

## Pyenv
* [managing-virtual-environment-with-pyenv](https://towardsdatascience.com/managing-virtual-environment-with-pyenv-ae6f3fb835f8)
* [pyenv](https://github.com/pyenv/pyenv)
* [pyenv-win](https://github.com/pyenv-win/pyenv-win)

## Setup
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

### Windows
```bash
# install
git clone https://github.com/pyenv-win/pyenv-win.git "%USERPROFILE%\.pyenv"

# set PATH (in powershell only)
[System.Environment]::SetEnvironmentVariable('PYENV',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
[System.Environment]::SetEnvironmentVariable('PYENV_HOME',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
[System.Environment]::SetEnvironmentVariable('path', $HOME + "\.pyenv\pyenv-win\bin;" + $HOME + "\.pyenv\pyenv-win\shims;" + $env:Path,"User")
```

typing `pyenv version` should yield:
```
No global python version has been set yet. Please set the global version by typing:
pyenv global 3.7.2
```

## Pipenv

```bash
# pipenv to requirements.txt
jq -r '.default | to_entries[] | .key + .value.version ' Pipfile.lock > requirements.txt

# install from requirements.txt
pipenv install -r requirements.txt
```
