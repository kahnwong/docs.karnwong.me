---
title: GitHub
---

## GH CLI

### Delete repo alias

```bash
gh alias set repo-delete 'api -X DELETE "repos/$1"'
gh repo-delete vilmibm/deleteme
```

## Github Actions

- [GitHub Actions Virtual Environments](https://github.com/actions/virtual-environments)

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
