---
title: Terraform
---

## Migrate Terraform remote tfstates
```bash
$ terraform state pull > dev.tfstate
$ terraform state mv -state-out=dev.tfstate module.lambda.module.your_function module.your_function
$ terraform state push dev.tfstate
```

## Remove IAM user
### bug in deleting user and login profile: login profile deleted from state but not from aws
https://github.com/hashicorp/terraform-provider-aws/issues/4205
