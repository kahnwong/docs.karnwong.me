# Poetry

## Usage

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

## Include `src` folder

```toml
[tool.poetry]
packages = [
    {include = "src"}
]
```

## pre-commit config for subfolders

```yaml
- repo: https://github.com/python-poetry/poetry
  rev: 1.7.1
  hooks:
    - id: poetry-check
      args: ["-C", "./app"]
    - id: poetry-lock
      args: ["-C", "./app"]
    - id: poetry-export
      args:
        [
          "-C",
          "./app",
          "--without-hashes",
          "-f",
          "requirements.txt",
          "-o",
          "requirements.txt",
        ]
```

## Remove lock file

```bash
# remove lock file
find ~/.cache/pypoetry -name '*.lock' -type f -delete

## or
poetry env remove --all
poetry cache clear --all .
rm -rf $(poetry config cache-dir)/artifacts
```

## Keyring not working correctly on Ubuntu

```bash
export PYTHON_KEYRING_BACKEND=keyring.backends.null.Keyring
```
