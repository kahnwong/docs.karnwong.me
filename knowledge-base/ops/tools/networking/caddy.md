---
outline: deep
---

# Caddy

```bash
# log location
/var/lib/caddy/.local/share/caddy
```

## Cookbooks

### Template

```bash
example.com

root * /var/www

# Serve precompressed files if present
file_server /downloads/* {
 precompressed gzip zstd br
}

# Compress everything else that would benefit
encode zstd gzip

# Static site using database as file system
file_server /database/* {
 fs sqlite data.sql
}

# Static site embedded within the Caddy binary
file_server /embedded/* {
 fs embedded
}

# (Range/Etag/etc. all work without extra config)

# Serve static site with directory listings
file_server browse
```

### Basic auth

```bash
# create password hash
caddy hash-password --algorithm bcrypt
```

```javascript title="Caddyfile"
site.example.com {
    basicauth * {
        $USERNAME $PASSWORD_HASH
    }
    reverse_proxy 127.0.0.1:$PORT
}
```

### Filter IP

```bash
# https://gist.github.com/morph027/b771fb579c36ae550ebb2764581a1d0e

intranet.example.com {
  @ipfilter {
    not remote_ip 192.168.0.0/16
  }
  route @ipfilter {
    # redirect
    redir https://example.com/
    # or respond
    # respond "Access denied" 403 {
    #   close
    # }
  }
  reverse_proxy / https://intranet.lan
}
```

### SPA

```bash
:80 {
 # https://caddy.community/t/how-to-serve-spa-applications-with-caddy-v2/8761/2
 try_files {path} /
 encode gzip
 root * /app/dist/spa
 file_server
}
```

## Resources

- [Public and internal caddy network setup](https://mrkaran.dev/posts/exposing-services/)
- [Setup CORS in Caddy 2](https://kalnytskyi.com/posts/setup-cors-caddy-2/)
- [Error pages](https://github.com/tarampampam/error-pages) - 🚧 Pretty server's error pages in the docker image & git repository (for traefik, k8s, nginx and so on).
