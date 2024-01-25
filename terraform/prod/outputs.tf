# Output configuration for S3 Bucket ID
output "bucket_id" {
  # This ID is crucial for referencing the bucket in other AWS services and Terraform modules.
  description = "The unique identifier (ID) of the Amazon S3 bucket storing our website files."
  value       = module.prod.bucket_id
}

 #Output configuration for CloudFront Domain Name
output "cloudfront_domain_name" {
  # This domain name is used for accessing the content delivered through CloudFront.
  description = "The DNS domain name associated with our AWS CloudFront distribution."
  value       = module.prod.cloudfront_domain_name
}

# Output configuration for CloudFront Distribution ID
output "cloudfront_dist_id" {
  # This ID is used to uniquely identify the CloudFront distribution within AWS.
  description = "The unique identifier (ID) for our AWS CloudFront distribution."
  value       = module.prod.cloudfront_dist_id
}