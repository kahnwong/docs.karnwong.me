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

## Nix

### Installer

- [The Determinate Nix Installer](https://github.com/DeterminateSystems/nix-installer)

### Resources

- [MyNixOS](https://mynixos.com/) - Build and share reproducible software environments with Nix and NixOS.
- [Zero to Nix](https://zero-to-nix.com/) - An unofficial, opinionated, gentle introduction to Nix.
- [NixOS & Flakes Book](https://nixos-and-flakes.thiscute.world/)
- [nix.dev](https://nix.dev/) - Official documentation for the Nix ecosystem.

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

## Misc

- [magika](https://github.com/google/magika/) - Detect file content types with deep learning.
