---
outline: deep
---

# GitHub

## GH CLI

### Delete repo alias

```bash
gh alias set repo-delete 'api -X DELETE "repos/$1"'
```

### Transfer repo ownership alias

```bash
gh alias set transfer 'api repos/$1/transfer -f new_owner=$2'
```

### Set Actions secrets

```bash
gh secret set -f .env
```

## Github Actions

- [Paths Changes Filter](https://github.com/dorny/paths-filter) - Conditionally run actions based on files modified by PR, feature branch or pushed commits.
- [git-auto-commit Action](https://github.com/stefanzweifel/git-auto-commit-action)

## Cookbook

### Ignore dependabot PRs

```yaml
jobs:
  pre-commit:
    if: github.actor != 'dependabot[bot]'
```
