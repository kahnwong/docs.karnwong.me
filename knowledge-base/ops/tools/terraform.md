---
outline: deep
---

# Terraform

## Importers

### [terraformer](https://github.com/GoogleCloudPlatform/terraformer)

<https://github.com/GoogleCloudPlatform/terraformer/blob/master/docs/aws.md>

```bash
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

### [cf-terraforming](https://github.com/cloudflare/cf-terraforming)

```bash
cf-terraforming generate -t $TOKEN -z $ZONE --resource-type cloudflare_record > importing-example.tf
```

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

### multi-variable for for-each

<https://developer.hashicorp.com/terraform/language/functions/flatten>

```hcl
locals {
  # flatten ensures that this local value is a flat list of objects, rather
  # than a list of lists of objects.
  network_subnets = flatten([
    for network_key, network in var.networks : [
      for subnet_key, subnet in network.subnets : {
        network_key = network_key
        subnet_key  = subnet_key
        network_id  = aws_vpc.example[network_key].id
        cidr_block  = subnet.cidr_block
      }
    ]
  ])
}

resource "aws_subnet" "example" {
  # local.network_subnets is a list, so we must now project it into a map
  # where each key is unique. We'll combine the network and subnet keys to
  # produce a single unique key per instance.
  for_each = {
    for subnet in local.network_subnets : "${subnet.network_key}.${subnet.subnet_key}" => subnet
  }

  vpc_id            = each.value.network_id
  availability_zone = each.value.subnet_key
  cidr_block        = each.value.cidr_block
}
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
