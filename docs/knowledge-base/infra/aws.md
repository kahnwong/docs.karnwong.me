---
title: AWS
---

## Install

<https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html>

## Init

```bash
aws configure
```

## AWS Services

### S3

```bash
# upload to S3
aws s3 cp LOCAL s3://REMOTE_PATH

# download from s3
aws s3 cp s3://REMOTE_PATH output --recursive

## with wildcard
aws s3 cp s3://data/ . --recursive --exclude "*" --include "2016-08*"

# sync
aws s3 sync s3://S3PATH/ . --dryrun
```

### IAM

- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - Small tool to convert an IAM Policy in JSON format into a Terraform aws_iam_policy_document.
- [AWS managed policies](https://gist.github.com/gene1wood/55b358748be3c314f956)
- [AWS Service Principals](https://gist.github.com/shortjared/4c1e3fe52bdfa47522cfe5b41e5d6f22)

### Lambda

- [AWS Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html) - Maximum sizes, limits, and quotas for AWS Lambda functions and related resources.
- [download_all_lambda_function](https://github.com/sambhajis-gdb/download_all_lambda_function/blob/master/get_all_lambda-functions.sh)

### EC2

- [unused-amis.sh](https://gist.github.com/ilpianista/a8dfe8f7042d61abb8524571be910403)
- [Amazon EC2 Instance Comparison](https://ec2instances.github.io/)

### EMR

- [Spark with correct aws jars version](https://github.com/YotpoLtd/metorikku/blob/master/docker/spark/k8s/Dockerfile)

### Fargate

- [Fargate task size](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html#fargate-tasks-size)

## Pricing

- [Amazon EMR 6.x Release Versions](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-6x.html) - Lists application versions, components, and release notes for each Amazon EMR release in the 6.x series.
- [AWS Fargate ECS Pricing Calculator](http://fargate-pricing-calculator.site.s3-website-us-east-1.amazonaws.com/)
- [AWS Pricing Calculator](https://calculator.aws/) - AWS Pricing Calculator lets you explore AWS services, and create an estimate for the cost of your use cases on AWS.
- [AWS Savings Plan Calculator](https://cloudshim.com/calculator)
- [EC2 Pricing with Cost Savings](https://ec2pricing.usage.ai/)

## Services uptime

- [Is AWS Down](https://www.taloflow.ai/is-aws-down)

## Security

- [Prowler](https://github.com/prowler-cloud/prowler) - Prowler is an Open Source security tool to perform AWS security best practices assessments, audits, incident response, continuous monitoring, hardening and forensics readiness. It contains more than 200 controls covering CIS, PCI-DSS, ISO27001, GDPR, HIPAA, FFIEC, SOC2, AWS FTR, ENS and custom security frameworks.
- [S3 Bucket Scanner](https://purpleleaf.io/s3-scanner/)

## Resources

- [The Open Guide to Amazon Web Services](https://github.com/open-guides/og-aws)
- [Containers on AWS](https://containersonaws.com/)
- [AWS Well-Architected Framework](https://wa.aws.amazon.com/wat.map.en.html)
- [Easily Switch Accounts in AWS](https://gist.github.com/noahcoad/370f004d3be248778dca41a1abc53543)
