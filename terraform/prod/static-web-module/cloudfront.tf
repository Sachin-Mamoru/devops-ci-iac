resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for Cloudfront"
}

resource "aws_cloudfront_distribution" "cf_distribution" {
  enabled             = true
  default_root_object = "index.html"
  tags                = local.cf_distribution_tags
  price_class         = var.price_class

  origin {
    domain_name = aws_s3_bucket.web_bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.web_bucket.bucket_regional_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    }
  }


  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.web_bucket.bucket_regional_domain_name
    viewer_protocol_policy = "redirect-to-https"

    function_association {
      event_type = "viewer-response"
      function_arn = aws_cloudfront_function.apple_app_site_association_heaader_function.arn
    }

    # These TTL's are typical for SPA's. Adjust to meet caching needs accordingly
    # Minimum time to cache a file is 0 seconds
    min_ttl = 0
    # Default time to live for caching is 1 day
    default_ttl = 60 * 60 * 24
    # Max time to live for caching is 1 year
    max_ttl = 60 * 60 * 24 * 365
    # Compress static file to reduce bandwidth
    compress = true
    forwarded_values {
      query_string = false
      cookies {
        # Prevent cloudfront from caching things based on cookies as these are going to change with the hashed object. 
        # Setting this to 'none' allows cloudfront to properly cache values and prevent errors and misses.
        forward = "none"
      }
    }
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

resource "aws_cloudfront_function" "apple_app_site_association_heaader_function" {
  name = "apple_app_site_association_heaader_function"
  comment = "Add the content type of application/json to apple site file in response headers function"
  runtime = "cloudfront-js-1.0"
  code = file("${path.module}/AppleSiteAssociationHeaderFunction.js")
}