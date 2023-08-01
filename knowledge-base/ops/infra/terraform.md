---
outline: deep
---

# Terraform

## Importers

### [terraformer](https://github.com/GoogleCloudPlatform/terraformer)

```bash
# https://github.com/GoogleCloudPlatform/terraformer/blob/master/docs/aws.md

terraformer import aws --resources=api_gateway --connect=true --regions=ap-southeast-1
terraform state replace-provider -auto-approve registry.terraform.io/-/aws hashicorp/aws
```

### Import block

```hcl
import {
  to = google_container_cluster.auto
  id = "asia-southeast1/autopilot-cluster-1"
}
```

```bash
terraform plan -generate-config-out=generated_resources.tf
```

## Tools

- [driftctl](https://github.com/cloudskiff/driftctl) - Detect, track and alert on infrastructure drift.
- [Pluralith](https://pluralith.com/) - Visualize Terraform infrastructure.

### Linters

- [tflint](https://github.com/terraform-linters/tflint) - A Pluggable Terraform Linter.
- [tfsec](https://github.com/aquasecurity/tfsec/) - A static analysis security scanner for your Terraform code.

### Visualizations

- [Terraform graph beautifier](https://github.com/pcasteran/terraform-graph-beautifier)

## Cookbook

### Migrate Terraform remote tfstates

```bash
terraform state pull > dev.tfstate
terraform state mv -state-out=dev.tfstate module.lambda.module.your_function module.your_function
terraform state mv \
    -state=dev.tfstate \
    -state-out=workspace/dev.tfstate \
    aws_iam_role.a \
    aws_iam_role.a
terraform state push dev.tfstate
```

## Resources

- [How Terraform Works: A Visual Intro](https://betterprogramming.pub/how-terraform-works-a-visual-intro-6328cddbe067)
- [My Terraform Development Workflow](https://brendanthompson.com/posts/2021/11/my-terraform-development-workflow)
- [My Terraform Standards](https://brendanthompson.com/posts/2021/11/my-terraform-standards)
- [Terraform Best Practices](https://www.terraform-best-practices.com/)
- [Terraform Opinion #23: Use list of objects over map of maps](https://jq1.io/posts/opinion_23/)

### Examples

- [GOV.UK Infrastructure](https://github.com/alphagov/govuk-infrastructure)
- [partinfra-terraform](https://github.com/mozilla/partinfra-terraform) - Terraform configuration for Participation Infrastructure.
