server {
  listen 443 http2;
  listen [::]:443 http2;

  root /var/www/html;
  index index.html;
  error_log  /var/log/nginx/error.log;
  access_log /var/log/nginx/access.log;

  server_name getportway.com www.getportway.com;

  location / {
    try_files $uri $uri/ =404;
    gzip_static on;
  }
}
