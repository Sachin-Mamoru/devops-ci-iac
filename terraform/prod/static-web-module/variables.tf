variable "bucket_name" {
  description = "Webapp bucket name"
  type        = string
}
variable "region" {
  description = "AWS Region"
  type        = string
}

variable "price_class" {
  description = "CloudFront distribution price class"
  default     = "PriceClass_100"
  type        = string
}