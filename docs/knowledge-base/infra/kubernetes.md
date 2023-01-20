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
- [k3s](https://k3s.io/) - The certified Kubernetes distribution built for IoT & Edge computing.
- [k3d](https://github.com/k3d-io/k3d) - Little helper to run CNCF's k3s in Docker.

## Packages

- [Artifact Hub](https://artifacthub.io/) - Find, install and publish Kubernetes packages.


## Tools

- [kompose](https://kompose.io/) - Kompose is a conversion tool for Docker Compose to container orchestrators such as Kubernetes (or OpenShift).

## Resources

- [Learn Kubernetes with Google](https://learnkubernetes.withgoogle.com/)
- [Kubernetes Tutorials](https://kubernetes.io/docs/tutorials/)
