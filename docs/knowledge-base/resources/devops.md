---
title: DevOps
---

## AWS
- [saws](https://github.com/donnemartin/saws#installation) - A supercharged AWS command line interface (CLI).

### Resources
- [Amazon EC2 Instance Comparison](https://ec2instances.info)
- [Amazon EMR 6.x Release Versions](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-6x.html) - Lists application versions, components, and release notes for each Amazon EMR release in the 6.x series.
- [Amazon Web Services](https://adayinthelifeof.nl/2020/05/20/aws.html) - Description for AWS services.
- [AWS Compute Optimizer](https://aws.amazon.com/blogs/aws/new-for-aws-compute-optimizer-resource-efficiency-metrics-to-estimate-savings-opportunities-and-performance-risks/)
- [AWS Fargate ECS Pricing Calculator](https://www.fargate.org/)
- [AWS Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html) - Maximum sizes, limits, and quotas for AWS Lambda functions and related resources.
- [AWS Pricing Calculator](https://calculator.aws/#/estimate) - AWS Pricing Calculator lets you explore AWS services, and create an estimate for the cost of your use cases on AWS.
- [AWS Savings Plan Calculator](https://cloudshim.com/calculator)

## CI/CD
- [Buildkite](https://buildkite.com/)
- [Codecov](https://about.codecov.io) - Ship healthier code faster with less risk.
- [Should I Deploy Today](https://shouldideploy.today/)

### Resources
- [awesome actions](https://github.com/sdras/awesome-actions)

## Database
- [dbmate](https://github.com/amacneil/dbmate) - A lightweight, framework-agnostic database migration tool.
- [Octo CLI](https://github.com/octoproject/octo-cli) - CLI tool to expose data from any database as a serverless web service.

## Diagrams
- [Cloudcraft](https://www.cloudcraft.co) - Visualize your cloud architecture like a pro.
- [dbdocs](https://dbdocs.io) - A free & simple tool to create web-based database documentation using DSL code. Designed for developers. Integrate seamlessly with your development workflow.
- [Diagrams](https://diagrams.mingrammer.com) - Diagrams lets you draw the cloud system architecture in Python code.
  - https://github.com/mingrammer/diagrams/issues/466
- [drawSQL](https://drawsql.app) - Create, visualize and collaborate on your database entity relationship diagrams.
- [swimlanes](https://swimlanes.io) - A simple online tool for creating sequence diagrams.

## Docker
- [composerize](https://www.composerize.com) - docker run asdlksjfksdf > docker-composerize up.
- [jupyter docker-stacks](https://github.com/jupyter/docker-stacks) - Ready-to-run Docker images containing Jupyter applications.

### Resources
- [contains.dev](https://contains.dev/) - Explore your images, view their files, layers and dependencies.
- [The Compose Specification](https://github.com/compose-spec/compose-spec/blob/master/spec.md) - The Compose specification establishes a standard for the definition of multi-container platform-agnostic applications.

## Git
 - [git cheatsheet](http://ndpsoftware.com/git-cheatsheet.html) - Interactive cheatsheet, visualization of git.
 - [git-cliff](https://github.com/orhun/git-cliff) - A highly customizable Changelog Generator that follows Conventional Commit specifications ⛰️.
 - [git-of-theseus](https://github.com/erikbern/git-of-theseus) - Analyze how a Git repo grows over time.
 - [git-split-diffs](https://github.com/banga/git-split-diffs) - GitHub style split diffs in your terminal.
 - [repostat](https://github.com/vifactor/repostat) - Inspired by gitstats project: git repository desktop analyzer.

### Resources
- [Git Explorer](https://gitexplorer.com)
- [Oh Shit, Git!?!](https://ohshitgit.com)
- [Trunk Based Development](https://trunkbaseddevelopment.com)

## IaC
- [driftctl](https://github.com/cloudskiff/driftctl) - Detect, track and alert on infrastructure drift.
- [terraform](https://github.com/hashicorp/terraform)
  - [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - Small tool to convert an IAM Policy in JSON format into a Terraform aws_iam_policy_document.
  - [infracost](https://github.com/infracost/infracost) - Cloud cost estimates for Terraform in pull requests💰📉 Love your cloud bill!
  - [regula](https://github.com/fugue/regula) - Regula checks infrastructure as code templates (Terraform, CloudFormation) for AWS, Azure and Google Cloud security and compliance using Open Policy Agent/Rego.
  - [terraform-compliance](https://terraform-compliance.com) - A lightweight, security and compliance focused test framework against terraform to enable negative testing capability for your infrastructure-as-code.
  - [terraform-docs](https://terraform-docs.io) - Generate Terraform modules documentation in various formats.
  - [terraformer](https://github.com/GoogleCloudPlatform/terraformer/blob/master/docs/aws.md) - CLI tool to generate terraform files from existing infrastructure (reverse Terraform). Infrastructure to Code.
  - [terragrunt](https://terragrunt.gruntwork.io/docs/getting-started/quick-start/) - Terragrunt is a thin wrapper that provides extra tools for keeping your configurations DRY, working with multiple Terraform modules, and managing remote state.
  - [terrascan](https://github.com/accurics/terrascan) - Detect compliance and security violations across Infrastructure as Code to mitigate risk before provisioning cloud native infrastructure.
  - [tflint](https://github.com/terraform-linters/tflint) - A Pluggable Terraform Linter.
  - [tfsec](https://tfsec.dev/docs/usage/) - A static analysis security scanner for your Terraform code.

### Resources
- [My Terraform Development Workflow](https://brendanthompson.com/posts/2021/11/my-terraform-development-workflow)
- [My Terraform Standards](https://brendanthompson.com/posts/2021/11/my-terraform-standards)
- [rotate AWS IAM secrets with terraform](https://cloud.gov/docs/ops/runbook/rotating-iam-users/)
- [Terraform Opinion #23: Use list of objects over map of maps](https://jq1.io/posts/opinion_23/)


## Kubernetes
- [k0s](https://docs.k0sproject.io/) - k0s is an all-inclusive Kubernetes distribution, configured with all of the features needed to build a Kubernetes cluster simply by copying and running an executable file on each target host.
- [Lens](https://k8slens.dev) - the kubernetes ide for debugging.
- [MicroK8s](https://microk8s.io) - Low-ops, minimal production Kubernetes, for devs, cloud, clusters, workstations, Edge and IoT.

## Monitoring
- [dockprom](https://github.com/stefanprodan/dockprom) - Docker hosts and containers monitoring with Prometheus, Grafana, cAdvisor, NodeExporter and AlertManager.
- [Loki](https://github.com/grafana/loki) - Like Prometheus, but for logs.


## Networking
- [firezone](https://github.com/firezone/firezone) - WireGuard-based VPN server and firewall.
- [headscale](https://github.com/juanfont/headscale) - An open source, self-hosted implementation of the Tailscale control server.
- [tailscale](https://tailscale.com) - A secure network that just works.

## Security
- [Hardenize](https://www.hardenize.com/) - Automated Discovery and Monitoring of Your Entire Network Perimeter.
- [ngrok](https://ngrok.com/) - ngrok allows you to expose a web server running on your local machine to the internet. Just tell ngrok what port your web server is listening on.
- [SSL Server Test](https://www.ssllabs.com/ssltest/) - A comprehensive free SSL test for your public web servers.
- [The Twelve-Factor App](https://12factor.net/)
- [Vault](https://www.vaultproject.io) - Secure, store and tightly control access to tokens, passwords, certificates, encryption keys for protecting secrets and other sensitive data using a UI, CLI, or HTTP API.

## Tracking
- [clientjs](https://github.com/jackspirou/clientjs) - Device information and digital fingerprinting written in pure JavaScript.

## Unix
- [System Administrator's Guide](https://docs.rockylinux.org/books/admin_guide/01-presentation/)

## Misc
- [MinIO](https://github.com/minio/minio) - High Performance, Kubernetes Native Object Storage.
- [Stack on a budget](https://github.com/255kb/stack-on-a-budget) - A collection of services with great free tiers for developers on a budget.
- [vladgh/s3sync](https://hub.docker.com/r/vladgh/s3sync) - This container keeps a local directory synced to an AWS S3 bucket.

### Resources
- [DevOps Bookmarks](https://www.devopsbookmarks.org)
