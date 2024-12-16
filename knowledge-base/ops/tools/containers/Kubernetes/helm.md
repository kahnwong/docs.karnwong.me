# Helm

## Charts

- [OperatorHub](https://operatorhub.io/)

## Resources

- [Helm Playground](https://helm-playground.com/)

## Packaging helm chart

```bash
helm package $CHART
helm registry login $REGISTRY_URL -u $USER
helm push demo-0.1.0.tgz oci://$REGISTRY_URL/$REPO

# usage
helm install <my-release> oci://$REGISTRY_URL/$REPO/$NAME:$VERSION
```
