---
outline: deep
---

# GCP

## Pricing

- [DB Cost](https://www.dbcost.com/) - The Simple AWS RDS and Google Cloud SQL Instance Pricing Sheet.
- [Google Cloud Pricing Calculator](https://cloud.google.com/products/calculator?hl=en)

## Administration

- [Regions and zones](https://cloud.google.com/compute/docs/regions-zones)
- [GCP List of API Services](https://gist.github.com/coryodaniel/13eaee16a87a7fdca5e738123216862a)

## Services

### Artifact Registry

- [Configure cleanup policies](https://cloud.google.com/artifact-registry/docs/repositories/cleanup-policy)

### Cloud Run

- [Enabling IAP for Cloud Run](https://cloud.google.com/iap/docs/enabling-cloud-run#gcloud)

### Compute Engine

- [Machine families resource and comparison guide](https://cloud.google.com/compute/docs/machine-resource)

### GKE

- [GKE API permissions](https://cloud.google.com/kubernetes-engine/docs/reference/api-permissions)

### IAM

- [IAM basic and predefined roles reference](https://cloud.google.com/iam/docs/understanding-roles)

Differences between iam_binding and iam_member:

- `binding` revokes any other members from the role to which it applies
- `member` just adds a member alongside existing members.

### Networking

- [Shared VPC](https://cloud.google.com/vpc/docs/shared-vpc)
- [VPC peering](https://cloud.google.com/vpc/docs/vpc-peering)
- [Subnets](https://cloud.google.com/vpc/docs/subnets)

### Logging

Filter by principal

```bash
protoPayload.authenticationInfo.principalEmail="xxxx@xxxx.com"
```

## Cookbook

### gcloud login

```bash
gcloud auth login
gcloud auth login --update-adc
gcloud config set account $ACCOUNT_NAME
gcloud config configurations list
gcloud config configurations activate $ACCOUNT_NAME
```

#### on colab

```python
from google.colab import auth

auth.authenticate_user()
```

### Set PROJECT_ID from environment variable

```bash
GOOGLE_CLOUD_PROJECT=foo
GOOGLE_CLOUD_QUOTA_PROJECT=bar
```

### Set up cloud-sql-proxy

```bash
brew install --cask google-cloud-sdk
gcloud auth application-default login

# see Releases for other versions
URL="https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.6.1"
curl "$URL/cloud-sql-proxy.darwin.arm64" -o cloud-sql-proxy
chmod +x cloud-sql-proxy
sudo mv cloud-sql-proxy /usr/local/bin/

cloud-sql-proxy --port <INTERNAL> <INSTANCE_CONNECTION_NAME>
```

### Get bearer token

```bash
gcloud auth print-identity-token
```

## Resources

- [Google Cloud Developer Cheat Sheet](https://googlecloudcheatsheet.withgoogle.com/)
- [Google Cloud Skills Boost Catalog](https://www.cloudskillsboost.google/catalog)
- [google-cloud-4-words](https://github.com/priyankavergadia/google-cloud-4-words)
- [GCPSketchnote](https://github.com/priyankavergadia/GCPSketchnote)
- [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework)
