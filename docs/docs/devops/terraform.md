---
title: Terraform
---

## Migrate Terraform remote tfstates
```bash
$ terraform state pull > dev.tfstate
$ terraform state mv -state-out=dev.tfstate module.lambda.module.your_function module.your_function
$ terraform state push dev.tfstate
```
