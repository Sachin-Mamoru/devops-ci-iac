# Resource for creating an S3 bucket
resource "aws_s3_bucket" "web_bucket" {
  bucket        = var.bucket_name       # Name of the bucket, defined in a variable
  force_destroy = true                  # Allows the bucket to be destroyed even if it contains objects
  tags          = local.web_bucket_tags # Tags for the bucket, defined in local variables
}

# Resource for configuring server-side encryption on the S3 bucket
resource "aws_s3_bucket_server_side_encryption_configuration" "s3_bucket_sse" {
  bucket = aws_s3_bucket.web_bucket.id  # Reference to the S3 bucket created above

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"  # Use AES256 encryption algorithm for server-side encryption
    }
  }
}

resource "aws_s3_bucket_acl" "s3_bucket_acl" {
  bucket     = aws_s3_bucket.web_bucket.id
  acl        = "private"
  depends_on = [aws_s3_bucket_ownership_controls.s3_bucket_acl_ownership]
}

resource "aws_s3_bucket_ownership_controls" "s3_bucket_acl_ownership" {
  bucket = aws_s3_bucket.web_bucket.id
  rule {
    object_ownership = "ObjectWriter"
  }
}

resource "aws_s3_bucket_policy" "web_bucket_policy" {
  bucket = aws_s3_bucket.web_bucket.id
  policy = data.aws_iam_policy_document.web_s3_policy.json
}
