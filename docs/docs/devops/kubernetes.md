---
title: Kubernetes
---

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
```

## Bare metal setup

- [k0s](https://docs.k0sproject.io/) - k0s is an all-inclusive Kubernetes distribution, configured with all of the features needed to build a Kubernetes cluster simply by copying and running an executable file on each target host.
- [Lens](https://k8slens.dev) - the kubernetes ide for debugging.
- [MicroK8s](https://microk8s.io) - Low-ops, minimal production Kubernetes, for devs, cloud, clusters, workstations, Edge and IoT.
