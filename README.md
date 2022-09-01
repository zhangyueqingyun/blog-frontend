# blog-frontend

我的个人博客前端项目。

## 安装依赖

```javascript
pnpm install
```

## 启动项目：

本地前后端联调

```javascript
pnpm dev
```
运行测试
~~~javascript
pnpm test
~~~

## nginx 配置

```
user root;

http {
    # enable gzip    
    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 5;
    gzip_types text/plain application/javascript application/x-javascript text/javascript text/xml text/css;
    gzip_disable "MSIE [1-6]\.";
    gzip_vary on;

    server {
        listen       80;
        listen       [::]:80;
        server_name  _;
        
        # redirect to https
        return 301 https://$http_host$request_uri;
    }

    # Settings for a TLS enabled server.
    server {
        listen       443 ssl http2;
        listen       [::]:443 ssl http2;
        server_name  _;

        ssl_certificate "cert.d/your-cert.pem";
        ssl_certificate_key "cert.d/your-cert.key";
        
        root /root;
        
        location ^~ /management {
            alias  /root/blog-management/;
            index index.html;
            try_files $uri $uri/ /blog-management/;
        }
        
        location ^~ /zblog {
            alias  /root/blog-frontend/;
            index index.html;
            try_files $uri $uri/ /blog-frontend/;
        }

        location ~ /api/ {
            proxy_pass http://127.0.0.1:9000;
        }

        location = / {
            rewrite ^/ /zblog;
        }
    }
}
```

