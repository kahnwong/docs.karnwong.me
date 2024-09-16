# UV

<https://docs.astral.sh/uv/>

## Usage

```bash
# install global packages
uv tool install $package

# install python
uv python list
uv python install 3.7.1 3.11

# init project
uv python pin 3.11
uv init $project

# add package
uv add $package
uv add --dev $package
uv add --optional $group $package

# deps update
uv sync
uv lock --upgrade
```

## Install current project as package

`pyproject.toml`

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"
```

```bash
uv pip install -e .
```
