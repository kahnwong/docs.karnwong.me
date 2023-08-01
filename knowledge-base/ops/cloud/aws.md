---
outline: deep
---

# AWS

## Install

<https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html>

## Init

```bash
aws configure
```

## Services

### ACM

For certs validation: <https://docs.aws.amazon.com/acm/latest/userguide/setup-caa.html>

```bash
CAA example.com 0 issue amazon.com
CAA example.com 0 issuewild amazon.com
```

### IAM

- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - Small tool to convert an IAM Policy in JSON format into a Terraform aws_iam_policy_document.
- [AWS managed policies](https://gist.github.com/gene1wood/55b358748be3c314f956)
- [AWS Service Principals](https://gist.github.com/shortjared/4c1e3fe52bdfa47522cfe5b41e5d6f22)

#### Commands

```bash
gcloud auth login
gcloud config configurations list
gcloud config configurations activate $ACCOUNT_NAME
```

### Cloudwatch

```sql
fields @timestamp, @message |
filter strcontains(@message, "error") |
sort @timestamp desc |
limit 100
```

Get stats

```sql
fields @message
| filter strcontains(@message, "lon")
| parse @message 'lon' as @lon |
| stats count(@lon) as QUERY_COUNT
```

### EC2

- [unused-amis.sh](https://gist.github.com/ilpianista/a8dfe8f7042d61abb8524571be910403)

### EMR

- [Spark with correct aws jars version](https://github.com/YotpoLtd/metorikku/blob/master/docker/spark/k8s/Dockerfile)
- [Amazon EMR 6.x Release Versions](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-6x.html) - Lists application versions, components, and release notes for each Amazon EMR release in the 6.x series.

### Fargate

- [Fargate task size](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html#fargate-tasks-size)

### Lambda

- [AWS Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html) - Maximum sizes, limits, and quotas for AWS Lambda functions and related resources.
- [download_all_lambda_function](https://github.com/sambhajis-gdb/download_all_lambda_function/blob/master/get_all_lambda-functions.sh)
- [Lambda Cold Starts analysis](https://maxday.github.io/lambda-perf/) - Visualize 10 Cold Starts for each runtime, updated daily.

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

## Maintenance

- [aws-nuke](https://github.com/rebuy-de/aws-nuke)
- [cloud-nuke](https://github.com/gruntwork-io/cloud-nuke)

## Pricing

- [AWS Fargate ECS Pricing Calculator](http://fargate-pricing-calculator.site.s3-website-us-east-1.amazonaws.com/)
- [AWS Pricing Calculator](https://calculator.aws/)
- [AWS Savings Plan Calculator](https://cloudshim.com/calculator)
- [EC2Instances.info](https://instances.vantage.sh/)

## Security

- [Prowler](https://github.com/prowler-cloud/prowler) - Prowler is an Open Source security tool to perform AWS security best practices assessments, audits, incident response, continuous monitoring, hardening and forensics readiness. It contains more than 200 controls covering CIS, PCI-DSS, ISO27001, GDPR, HIPAA, FFIEC, SOC2, AWS FTR, ENS and custom security frameworks.

## Services uptime

- [Is AWS Down](https://www.taloflow.ai/is-aws-down)

## Resources

- [AWS Glossary](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html)
- [AWS Well-Architected Framework](https://wa.aws.amazon.com/wat.map.en.html)
- [Easily Switch Accounts in AWS](https://gist.github.com/noahcoad/370f004d3be248778dca41a1abc53543)
- [The Open Guide to Amazon Web Services](https://github.com/open-guides/og-aws)
- [AWS breaking changes and price increases](https://github.com/SummitRoute/aws_breaking_changes)
- [Gaining access to inherited AWS EC2 instances](https://wiringbits.net/aws/2022/09/01/gaining-access-to-inherited-aws-ec2-instances.html)
