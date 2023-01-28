---
title: Caddy
---

```bash
# log location
/var/lib/caddy/.local/share/caddy
```

## Basic auth

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

## Filter IP

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

### Resources

- [Public and internal caddy network setup](https://mrkaran.dev/posts/exposing-services/)
