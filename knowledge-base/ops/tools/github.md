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
---
name: Build and deploy to K8s
on:
  push:
    branches: [master, dev] # [TODO] if `dev` or `uat`, set it to another namespace
  paths-ignore:
  - "README.md"
  - ".github/dependabot.yml"
  pull_request: # [TODO] remove
  workflow_dispatch:
concurrency:
    group: ${{ github.workflow }}-${{ github.ref }}
    cancel-in-progress: true
env:
  HARBOR_REGISTRY: registry.example.com
  HARBOR_REPOSITORY: project/service
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # ---------------- build & push ---------------- #
      - uses: actions/checkout@v3
      - name: Login to Docker Hub # [TODO] change me
        uses: docker/login-action@v2
        with:
          registry: ${{ env.HARBOR_REGISTRY }}
          username: ${{ secrets.HARBOR_USERNAME }}
          password: ${{ secrets.HARBOR_PASSWORD }}
      - name: Set up Docker Buildx
        id: buildx
        uses: docker/setup-buildx-action@v2
        with:
          install: true
      - name: Cache Docker layers
        uses: actions/cache@v2
        with:
          path: /tmp/.buildx-cache
          key: ${{ runner.os }}-buildx-${{ github.sha }}
          restore-keys: |
            ${{ runner.os }}-buildx
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@v4
        with:
          images: ${{ env.HARBOR_REGISTRY }}/${{ env.HARBOR_REPOSITORY }}
          tags: |
            type=raw,value={{sha}}
            type=raw,value=latest
      - name: Build, tag, and push image to Harbor
        uses: docker/build-push-action@v4
        with:
          context: .
          builder: ${{ steps.buildx.outputs.name }}
          file: Dockerfile.v2
          push: true
          target: deploy
          tags: ${{ steps.meta.outputs.tags }}
          cache-from: type=local,src=/tmp/.buildx-cache
          cache-to: type=local,mode=max,dest=/tmp/.buildx-cache-new
          provenance: false
      - name: Move cache
        run: |
          rm -rf /tmp/.buildx-cache
          mv /tmp/.buildx-cache-new /tmp/.buildx-cache
  deploy:
    runs-on: ubuntu-latest
    needs: build
    strategy:
      fail-fast: true
      matrix:
        company:
          - foo
          - bar
    steps:
      # ---------------- deploy ---------------- #
      - uses: actions/checkout@v3
      - uses: DeterminateSystems/nix-installer-action@main
      - uses: DeterminateSystems/magic-nix-cache-action@main
      - run: |
          nix-shell -p kubernetes-helm
          nix-shell -p kubectl
      - name: Tailscale
        uses: tailscale/github-action@v2
        with:
          oauth-client-id: ${{ secrets.TS_OAUTH_CLIENT_ID }}
          oauth-secret: ${{ secrets.TS_OAUTH_SECRET }}
          tags: tag:ci
      - name: Export kubeconfig
        run: |
          mkdir -p $HOME/.kube
          echo -n '${{ secrets.KUBECONFIG_BASE64 }}' | base64 --decode > $HOME/.kube/config
          chmod 600 $HOME/.kube/config
      - name: Create GITHUB_SHA_SHORT
        id: meta
        run: |
          echo "github_sha_short=${GITHUB_SHA::7}" >> $GITHUB_OUTPUT
      - name: Update values.yaml
        uses: fjogeleit/yaml-update-action@main
        with:
          valueFile: ./helm/${{ matrix.company }}.yaml
          propertyPath: tag
          value: ${{ steps.meta.outputs.github_sha_short }}
          commitChange: false
      - name: Helm install / upgrade
        working-directory: ./helm
        run: |
          cat ${{ matrix.company }}.yaml
          helm install ${{ matrix.company }}-backend ./chart --values ${{ matrix.company }}.yaml --namespace ${{ matrix.company }} \
            || helm upgrade ${{ matrix.company }}-backend ./chart --values ${{ matrix.company }}.yaml --namespace ${{ matrix.company }}
      - name: Health check
        run: |
          while [ "$(kubectl get deploy ${{ matrix.company }}-backend --namespace ${{ matrix.company }} -o json | jq .status.readyReplicas==.status.replicas)" != "true" ]; do
            sleep 5
            echo "Waiting for deployment ${{ matrix.company }} to be ready."
          done
```
