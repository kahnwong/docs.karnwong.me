# BuildKit

## Usage

```bash
pack build sample-app --path . --builder gcr.io/buildpacks/builder
```

## Set app entry point

```bash
# Procfile
web: streamlit run app.py
```

## Specify python version

```bash
# .python-version
3.11.4
```

## Add buildargs

```bash
pack build sample-app \
    --env "HELLO=WORLD" \
    --builder cnbs/sample-builder:jammy \
    --pathsamples/apps/bash-script/
```
