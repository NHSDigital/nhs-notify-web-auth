resource "aws_cognito_user_pool_domain" "custom" {
  count = var.branch_name == "main" ? 1 : 0

  user_pool_id    = aws_cognito_user_pool.main.id
  certificate_arn = aws_acm_certificate.cognito.arn
  domain          = local.auth_domain_name

  depends_on = [aws_route53_record.root]
}
