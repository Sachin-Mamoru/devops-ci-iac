module "prod" {
  source           = "./static-web-module"
  region           = var.region
  bucket_name      = "cloud-computing-cw2-s3-bucket"
}
