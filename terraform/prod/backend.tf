terraform {
  # Backend configuration to specify where the Terraform state is stored
  backend "remote" {
    # Specifies the hostname of the Terraform Cloud
    hostname     = "app.terraform.io"
    # The name of the organization in Terraform Cloud
    organization = "cc-cw2-team-06"
    # Workspace configuration within the organization
    workspaces {
      # Name of the workspace, set to 'prod' for production
      name = "react-ci-iac"
    }
  }

  # Block to define required providers for this configuration
  required_providers {
    # Configuration for the AWS provider
    aws = {
      # The source from where the AWS provider is fetched
      source  = "hashicorp/aws"
      # Version constraint for the AWS provider, allowing versions around 4.67.0
      version = "~> 4.67.0"
    }
  }
}
