---
outline: deep
---

# Kubernetes

## Setup

```bash
# curl -sfL https://get.k3s.io | sh -
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --disable traefik" sh # so it frees up port 80 and 443

## register a worker node
# get NODE_TOKEN via `cat /var/lib/rancher/k3s/server/node-token`
export K3S_URL=https://myserver:6443
export NODE_TOKEN=
curl -sfL https://get.k3s.io | K3S_URL="$K3S_URL" K3S_TOKEN="$NODE_TOKEN" sh -

# export kubeconfig
k3s kubectl config view --raw # copy this to ~/.kube/config on your local machine

# uninstall
/usr/local/bin/k3s-uninstall.sh
```

## Usage

```bash
# restart deployment
kubectl rollout restart deploy $DEPLOYMENT_NAME

# referencing service hostname from within cluster
## see: https://stackoverflow.com/a/55650127
`<service.name>.<namespace name>.svc.cluster.local` or `<service.name>.<namespace name>`

# reverse `kubectl apply`
kubectl delete -f <filename>
```

## Add-Ons

- [Cilium](https://cilium.io/) - Cloud Native, eBPF-based Networking, Observability, and Security.
- [Knative](https://knative.dev/docs/) - Open-Source Enterprise-level solution to build Serverless and Event Driven Applications.
- [kserve](https://github.com/kserve/kserve) - Standardized Serverless ML Inference Platform on Kubernetes.

## Monitoring & Observability

- [Coroot](https://github.com/coroot/coroot) - Coroot is an open-source eBPF-based observability tool that turns telemetry data into actionable insights, helping you identify and resolve application issues quickly.

## Helm

### Packaging helm chart

```bash
helm package $CHART
helm registry login $REGISTRY_URL -u $USER
helm push demo-0.1.0.tgz oci://$REGISTRY_URL/$REPO

# usage
helm install <my-release> oci://$REGISTRY_URL/$REPO/$NAME:$VERSION
```

## ArgoCD

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

argocd admin initial-password -n argocd
argocd login <ARGOCD_SERVER>
```

## Cookbooks

### Pulling image from private registry

```hcl
resource "kubernetes_secret" "harbor_config" {
  for_each = local.namespaces

  metadata {
    name      = "harbor-cfg"
    namespace = each.key
  }

  type = "kubernetes.io/dockerconfigjson"

  data = {
    ".dockerconfigjson" = jsonencode({
      auths = {
        "${var.registry_server}" = {
          "username" = var.registry_username
          "password" = var.registry_password
          "auth"     = base64encode("${var.registry_username}:${var.registry_password}")
        }
      }
    })
  }
}
```

In deployment specs, add:

```yaml
      containers:
      imagePullSecrets:
        - name: harbor-cfg
```

### Emptying the finalizers for a namespace that will not delete

<https://fabianlee.org/2022/03/08/kubernetes-emptying-the-finalizers-for-a-namespace-that-will-not-delete/>

```bash
export NAMESPACE=
kubectl get ns $NAMESPACE -o json | jq '.spec.finalizers = []' | kubectl replace --raw "/api/v1/namespaces/$NAMESPACE/finalize" -f -
```

### Force delete ghost pods

```bash
kubectl delete pods <pod> --grace-period=0 --force
```

### Local dev Kubernetes setup

<https://k3d.io/>

```bash

k3d cluster create mycluster
k3d cluster delete mycluster
```

## Tools

- [distroless](https://github.com/GoogleContainerTools/distroless) - 🥑 Language focused docker images, minus the operating system.
- [pluto](https://github.com/FairwindsOps/pluto) - A cli tool to help discover deprecated apiVersions in Kubernetes.
- [Kubeshark](https://github.com/kubeshark/kubeshark) - Wireshark for Kubernetes.
- [cosign](https://github.com/sigstore/cosign) - Container signing.
- [kubetail](https://github.com/kubetail-org/kubetail) - Web-based, real-time log viewer for Kubernetes.
- [Falco](https://falco.org/) - Detect security threats in real time.

## Resources

- [Learn Kubernetes with Google](https://learnkubernetes.withgoogle.com/)
- [Kubernetes Tutorials](https://kubernetes.io/docs/tutorials/)
- [Helm Playground](https://helm-playground.com/)
- [OperatorHub](https://operatorhub.io/)
- [Kubernetes Failure Stories](https://k8s.af/)
- [The Kubenomicon](https://kubenomicon.com/)
