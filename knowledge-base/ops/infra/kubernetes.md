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
# restart deployment
kubectl rollout restart deploy $DEPLOYMENT_NAME

# referencing service hostname from within cluster
## see: https://stackoverflow.com/a/55650127
`<service.name>.<namespace name>.svc.cluster.local` or `<service.name>.<namespace name>`

# reverse `kubectl apply`
kubectl delete -f <filename>
```

## Useful links

- [Pull an Image from a Private Registry](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)
- [Emptying the finalizers for a namespace that will not delete](https://fabianlee.org/2022/03/08/kubernetes-emptying-the-finalizers-for-a-namespace-that-will-not-delete/)

## Packages

- [Artifact Hub](https://artifacthub.io/) - Find, install and publish Kubernetes packages.

## Database Operators

- [CloudNativePG](https://github.com/cloudnative-pg/cloudnative-pg)

## Monitoring & Observability

- [Coroot](https://github.com/coroot/coroot) - Coroot is an open-source eBPF-based observability tool that turns telemetry data into actionable insights, helping you identify and resolve application issues quickly.

## Distribution

- [kOps](https://github.com/kubernetes/kops) - The easiest way to get a production grade Kubernetes cluster up and running.
- [Talos Linux](https://www.talos.dev/) - The Kubernetes Operating System.

## Resources

- [Learn Kubernetes with Google](https://learnkubernetes.withgoogle.com/)
- [Kubernetes Tutorials](https://kubernetes.io/docs/tutorials/)
