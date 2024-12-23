---
outline: deep
---

# Caddy

```bash
# log location
/var/lib/caddy/.local/share/caddy
```

## Forward Auth

<https://docs.goauthentik.io/docs/providers/proxy/server_caddy>

## Cookbook

### Template

```bash
example.com

root * /var/www

# Serve pre-compressed files if present
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

## Caddy with Cloudflare Plugin

```bash
sudo apt install golang-go -y
go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest
~/go/bin/xcaddy build --with github.com/caddy-dns/cloudflare
sudo mv caddy /usr/bin/

sudo groupadd --system caddy
sudo useradd --system \
    --gid caddy \
    --create-home \
    --home-dir /var/lib/caddy \
    --shell /usr/sbin/nologin \
    --comment "Caddy web server" \
    caddy
```

Paste this in `sudo vi /etc/systemd/system/caddy.service`

```toml
# caddy.service
#
# For using Caddy with a config file.
#
# Make sure the ExecStart and ExecReload commands are correct
# for your installation.
#
# See https://caddyserver.com/docs/install for instructions.
#
# WARNING: This service does not use the --resume flag, so if you
# use the API to make changes, they will be overwritten by the
# Caddyfile next time the service is restarted. If you intend to
# use Caddy's API to configure it, add the --resume flag to the
# `caddy run` command or use the caddy-api.service file instead.

[Unit]
Description=Caddy
Documentation=https://caddyserver.com/docs/
After=network.target network-online.target
Requires=network-online.target

[Service]
User=caddy
Group=caddy
ExecStart=/usr/bin/caddy run --environ --config /etc/caddy/Caddyfile
ExecReload=/usr/bin/caddy reload --config /etc/caddy/Caddyfile
TimeoutStopSec=5s
LimitNOFILE=1048576
LimitNPROC=512
PrivateTmp=true
ProtectSystem=full
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
```

Start service via

```bash
sudo systemctl daemon-reload
sudo systemctl enable caddy
sudo systemctl start caddy
```

## Resources

- [Public and internal caddy network setup](https://mrkaran.dev/posts/exposing-services/)
- [Setup CORS in Caddy 2](https://kalnytskyi.com/posts/setup-cors-caddy-2/)
- [Error pages](https://github.com/tarampampam/error-pages) - 🚧 Pretty server's error pages in the docker image & git repository (for traefik, k8s, nginx and so on).
