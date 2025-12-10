FROM node:18-alpine AS frontend
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM php:8.2-fpm AS backend
RUN apt-get update && apt-get install -y nginx git curl unzip gettext-base libpq-dev libzip-dev && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-install pdo pdo_mysql mbstring zip opcache
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
WORKDIR /var/www
COPY . .
COPY --from=frontend /app/public/build ./public/build
RUN composer install --no-dev --prefer-dist --optimize-autoloader
RUN chown -R www-data:www-data storage bootstrap/cache
COPY docker/nginx.conf /etc/nginx/templates/default.conf.template
COPY docker/start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh
ENV PORT=8080
EXPOSE 8080
CMD ["/usr/local/bin/start.sh"]
