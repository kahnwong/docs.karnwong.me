---
outline: deep
---

# GitHub

## GH CLI

### Delete repo alias

```bash
gh alias set repo-delete 'api -X DELETE "repos/$1"'
gh repo-delete vilmibm/deleteme
```

## Github Actions

- [GitHub Actions Virtual Environments](https://github.com/actions/virtual-environments)

### Template

```yaml
on:
  push:
    branches: [master]
    paths-ignore:
      - "README.md"
      - ".github/dependabot.yml"

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  build:
    env:
      ECR_REPOSITORY: fava

    permissions:
      id-token: write
      contents: read

    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Set up QEMU
        uses: docker/setup-qemu-action@v2
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@v4
        with:
          images: ${{ steps.login-ecr.outputs.registry }}/${{ env.ECR_REPOSITORY }}
          tags: |
            type=raw,value={{sha}}
            type=raw,value=latest

      - name: Build, tag, and push image to Amazon ECR
        uses: docker/build-push-action@v3
        with:
          context: .
          platforms: linux/amd64,linux/arm64
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

### Cookbook

#### Run locally built image

```yaml
- name: Build Docker image
  uses: docker/build-push-action@v3
  with:
    context: .
    push: false
    tags: $IMAGE_NAME:$TAG
    load: true
    cache-from: type=gha
    cache-to: type=gha,mode=max
```

#### Docker tags

```yaml
- name: Create docker image tags
  id: meta
  run: |
    latest_tag=${{ steps.login-ecr.outputs.registry }}/${{ env.ECR_REPOSITORY }}:latest
    short_sha_tag=${{ steps.login-ecr.outputs.registry }}/${{ env.ECR_REPOSITORY }}:${GITHUB_SHA::7}
    tags=$latest_tag,$short_sha_tag

    echo "short_sha_tag=$short_sha_tag" >> $GITHUB_OUTPUT
    echo "tags=$tags" >> $GITHUB_OUTPUT
    tags: ${{ steps.meta.outputs.tags }}
```

#### Run matrix on directory

From pre-defined set of directories

```yaml
jobs:
  terraform:
    name: "Terraform"
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        path:
          - github/github
          - github/github-ext
          - tfe/workspace

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v2
        with:
          cli_config_credentials_token: ${{ secrets.TF_API_TOKEN }}

      - name: Terraform Format
        id: fmt
        run: |
          cd environments/${{ matrix.path }}
          terraform fmt -check

      - name: Terraform Init
        id: init
        run: |
          cd environments/${{ matrix.path }}
          terraform init
```

From a command output

```yaml
on: pull_request
jobs:
  collect_dirs:
    runs-on: ubuntu-latest
    outputs:
      dirs: ${{ steps.dirs.outputs.dirs }}
    steps:
      - uses: actions/checkout@v2
      - id: dirs
        run: echo "::set-output name=dirs::$(ls -d environments/**/* | jq --raw-input --slurp --compact-output 'split("\n")[:-1]')"
  infracost:
    runs-on: ubuntu-latest
    needs: collect_dirs
    strategy:
      matrix:
        dir: ${{ fromJson(needs.collect_dirs.outputs.dirs) }}
```
