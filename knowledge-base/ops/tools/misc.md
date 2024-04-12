---
outline: deep
---

# Misc

## fish

### Setup

```
brew install fish
curl -fsSL https://starship.rs/install.sh | bash
```

### fish_config

<https://github.com/fish-shell/fish-shell/issues/1916>

- viewing the temp file fish creates to see what port the webserver is bound to (I had 8000)
- opening a second ssh session and tunneling the port to localhost. example:
  `ssh -L 8000:localhost:8000 user@host`
- opening my browser to the link referenced in the temp file.

## GeoIP

- <http://ip-api.com/json/$IP>
- [IP2Location](https://github.com/chrislim2888/ip2location-python)

## Nix

- [MyNixOS](https://mynixos.com/) - Build and share reproducible software environments with Nix and NixOS.
- [Zero to Nix](https://zero-to-nix.com/) - An unofficial, opinionated, gentle introduction to Nix.
- [NixOS & Flakes Book](https://nixos-and-flakes.thiscute.world/)

### Avoid macOS updates to destroy nix

`$HOME/.zshrc`

```bash
if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
  source '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
fi
```

### Try out a package

```bash
nix-shell -p kubeshark
```

## Proxmox

- [Proxmox VE Helper-Scripts](https://tteck.github.io/Proxmox/)
