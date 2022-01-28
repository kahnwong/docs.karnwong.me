---
title: Terraform
---

## Migrate Terraform remote tfstates
```bash
$ terraform state pull > dev.tfstate
$ terraform state mv -state-out=dev.tfstate module.lambda.module.your_function module.your_function
$ terraform state mv \
    -state=dev.tfstate \
    -state-out=workspace/dev.tfstate \
    aws_iam_role.a \
    aws_iam_role.a
$ terraform state push dev.tfstate
```


## Terraformer
https://github.com/GoogleCloudPlatform/terraformer/blob/master/docs/aws.md

```bash
$ terraformer import aws --resources=api_gateway --connect=true --regions=ap-southeast-1
$ terraform state replace-provider -auto-approve registry.terraform.io/-/aws hashicorp/aws
```


## Tools
- [driftctl](https://github.com/cloudskiff/driftctl) - Detect, track and alert on infrastructure drift.
- [terraform](https://github.com/hashicorp/terraform)
  - [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - Small tool to convert an IAM Policy in JSON format into a Terraform aws_iam_policy_document.
  - [regula](https://github.com/fugue/regula) - Regula checks infrastructure as code templates (Terraform, CloudFormation) for AWS, Azure and Google Cloud security and compliance using Open Policy Agent/Rego.
  - [terraform-compliance](https://terraform-compliance.com) - A lightweight, security and compliance focused test framework against terraform to enable negative testing capability for your infrastructure-as-code.
  - [terragrunt](https://terragrunt.gruntwork.io/docs/getting-started/quick-start/) - Terragrunt is a thin wrapper that provides extra tools for keeping your configurations DRY, working with multiple Terraform modules, and managing remote state.
  - [terrascan](https://github.com/accurics/terrascan) - Detect compliance and security violations across Infrastructure as Code to mitigate risk before provisioning cloud native infrastructure.
  - [tflint](https://github.com/terraform-linters/tflint) - A Pluggable Terraform Linter.
  - [tfsec](https://tfsec.dev/docs/usage/) - A static analysis security scanner for your Terraform code.


### Resources
- [My Terraform Development Workflow](https://brendanthompson.com/posts/2021/11/my-terraform-development-workflow)
- [My Terraform Standards](https://brendanthompson.com/posts/2021/11/my-terraform-standards)
- [rotate AWS IAM secrets with terraform](https://cloud.gov/docs/ops/runbook/rotating-iam-users/)
- [Terraform Best Practices](https://www.terraform-best-practices.com/)
- [Terraform Opinion #23: Use list of objects over map of maps](https://jq1.io/posts/opinion_23/)
