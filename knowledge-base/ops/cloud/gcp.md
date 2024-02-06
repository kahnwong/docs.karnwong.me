---
outline: deep
---

# GCP

## Pricing

- [GCPinstances.info](https://gcpinstances.doit-intl.com/)
- [DB Cost](https://www.dbcost.com/) - The Simple AWS RDS and Google Cloud SQL Instance Pricing Sheet.

## Administration

- [Regions and zones](https://cloud.google.com/compute/docs/regions-zones)
- [GCP List of API Services](https://gist.github.com/coryodaniel/13eaee16a87a7fdca5e738123216862a)
- [GCP organization policies](https://registry.terraform.io/modules/terraform-google-modules/org-policy/google/latest)

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

- [Viewing effective IAM policies](https://cloud.google.com/asset-inventory/docs/view-effective-iam-policies)
- [IAM basic and predefined roles reference](https://cloud.google.com/iam/docs/understanding-roles)
- [Analyze IAM policies](https://cloud.google.com/policy-intelligence/docs/analyze-iam-policies)
- [Overview of role recommendations](https://cloud.google.com/policy-intelligence/docs/role-recommendations-overview)

Differences between iam_binding and iam_member: `binding` revokes any other members from the role to which it applies, whereas `member` just adds a member alongside existing members.

### Networking

- [Shared VPC](https://cloud.google.com/vpc/docs/shared-vpc)
- [VPC peering](https://cloud.google.com/vpc/docs/vpc-peering)
- [Subnets](https://cloud.google.com/vpc/docs/subnets)

## Cookbooks

### gcloud login

```bash
gcloud auth login
gcloud auth login --update-adc
gcloud config set account $ACCOUNT_NAME
gcloud config configurations list
gcloud config configurations activate $ACCOUNT_NAME
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

## Resources

- [Google Cloud Developer Cheat Sheet](https://googlecloudcheatsheet.withgoogle.com/)
- [Google Cloud Skills Boost Catalog](https://www.cloudskillsboost.google/catalog)
- [google-cloud-4-words](https://github.com/priyankavergadia/google-cloud-4-words)
- [GCPSketchnote](https://github.com/priyankavergadia/GCPSketchnote)
