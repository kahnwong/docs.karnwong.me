---
outline: deep
---

# Misc

## fish

### fish_config

<https://github.com/fish-shell/fish-shell/issues/1916>

- viewing the temp file fish creates to see what port the webserver is bound to (I had 8000)
- opening a second ssh session and tunneling the port to localhost. example:
  `ssh -L 8000:localhost:8000 user@host`
- opening my browser to the link referenced in the temp file.

## Proxmox

- [Proxmox VE Helper-Scripts](https://tteck.github.io/Proxmox/)

### Config

```bash
CIDR: 192.168.1.70/28
GATEWAY: 192.168.1.1

CIDR for another node: 192.168.1.80/30
```

## Misc

- [magika](https://github.com/google/magika/) - Detect file content types with deep learning.
