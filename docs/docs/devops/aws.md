---
title: AWS
---

## Install

<https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html>

## Usage

```bash
# set config
aws configure

# upload to S3
aws s3 cp LOCAL s3://REMOTE_PATH

# download from s3
aws s3 cp s3://REMOTE_PATH output --recursive

## with wildcard
aws s3 cp s3://data/ . --recursive --exclude "*" --include "2016-08*"

# sync
aws s3 sync s3://S3PATH/ . --dryrun
```
