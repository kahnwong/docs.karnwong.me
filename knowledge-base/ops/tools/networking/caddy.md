---
outline: deep
---

# Caddy

```bash
# log location
/var/lib/caddy/.local/share/caddy
```

## Cookbooks

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

```python title="Caddyfile"
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

```javascript
:80 {
 # https://caddy.community/t/how-to-serve-spa-applications-with-caddy-v2/8761/2
 try_files {path} /
 encode gzip
 root * /app/dist/spa
 file_server
}
```

## Resources

- [Public and internal caddy network setup](https://mrkaran.dev/posts/exposing-services-self-hosting/)
- [Setup CORS in Caddy 2](https://kalnytskyi.com/posts/setup-cors-caddy-2/)
