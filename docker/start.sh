#!/usr/bin/env bash
set -e

: "${PORT:=8080}"
envsubst '${PORT}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

if [ -z "${APP_KEY}" ]; then
  export APP_KEY=$(php -r "echo 'base64:'.base64_encode(random_bytes(32));")
fi

php /var/www/artisan config:clear || true
php /var/www/artisan route:clear || true
php /var/www/artisan view:clear || true
php /var/www/artisan config:cache || true

php-fpm -D
nginx -g 'daemon off;'
