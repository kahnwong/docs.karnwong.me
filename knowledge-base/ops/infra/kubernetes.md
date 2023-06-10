---
outline: deep
---

# Kubernetes

## Setup

```bash
# curl -sfL https://get.k3s.io | sh -
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --disable traefik" sh # so it frees up port 80 and 443

# export kubeconfig
k3s kubectl config view --raw # copy this to ~/.kube/config on your local machine

# uninstall
/usr/local/bin/k3s-uninstall.sh
```

## Usage

```bash
kubectl proxy

# port forwarding
kubectl port-forward dagster-655484799c-xtlbf 3000:3000
kubectl port-forward service/dagster 3001:3000

# merge kubeconfig
KUBECONFIG=~/.kube/config:~/.kube/k3s_pi kubectl config view --flatten > new

# view contexts
kubectl config get-contexts

# rename context
kubectl config rename-context default k3s_pi

# restart deployment
kubectl rollout restart deploy
```

## Packages

- [Artifact Hub](https://artifacthub.io/) - Find, install and publish Kubernetes packages.

## Monitoring & Observability

- [Coroot](https://github.com/coroot/coroot) - Coroot is an open-source eBPF-based observability tool that turns telemetry data into actionable insights, helping you identify and resolve application issues quickly.

## Tools

- [kompose](https://kompose.io/) - Kompose is a conversion tool for Docker Compose to container orchestrators such as Kubernetes (or OpenShift).
- [skaffold](https://skaffold.dev/) - Easy and Repeatable Kubernetes Development.
- [Talos Linux](https://www.talos.dev/) - The Kubernetes Operating System.

## Resources

- [Learn Kubernetes with Google](https://learnkubernetes.withgoogle.com/)
- [Kubernetes Tutorials](https://kubernetes.io/docs/tutorials/)
