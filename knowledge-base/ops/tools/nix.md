# Nix

## Installer

- [The Determinate Nix Installer](https://github.com/DeterminateSystems/nix-installer)

## Resources

- [MyNixOS](https://mynixos.com/) - Build and share reproducible software environments with Nix and NixOS.
- [Zero to Nix](https://zero-to-nix.com/) - An unofficial, opinionated, gentle introduction to Nix.
- [NixOS & Flakes Book](https://nixos-and-flakes.thiscute.world/)
- [nix.dev](https://nix.dev/) - Official documentation for the Nix ecosystem.

## Avoid macOS updates to destroy nix

`$HOME/.zshrc`

```bash
if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
  source '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
fi
```

## Try out a package

```bash
nix-shell -p kubeshark
```
