---
outline: deep
---

# Linux (Desktop)

## Distros

- [Bazzite](https://github.com/ublue-os/bazzite) - Bazzite is a custom image built upon Fedora Atomic Desktops that brings the best of Linux gaming to all of your devices - including your favorite handheld


## Cookbook

### Linux on Macbook

- [macbook12-bluetooth-driver](https://github.com/leifliddy/macbook12-bluetooth-driver)
- [snd_hda_macbookpro](https://github.com/davidjo/snd_hda_macbookpro/) - Kernel audio driver for Macs with 8409 HDA chip + MAX98706/SSM3515 amps.
- [troubleshooting not waking up after closing the lid](https://askubuntu.com/a/1020883)
- [FacetimeHD linux driver](https://github.com/patjak/facetimehd/wiki)
- [Wi-Fi and Bluetooth](https://wiki.t2linux.org/guides/wifi-bluetooth/) - Download `firmware.sh` and execute it

### Set default editor

```bash
sudo update-alternatives --config editor
```

### Install CUDA

```bash
sudo apt install nvidia-cudnn nvidia-cuda-toolkit
```
### Fix `tracker-miner-fs-3` process

```bash
tracker3 reset --filesystem
rm -fr ~/.cache/tracker3
# then reboot
```

## Resources

- [partitioning disk for dual boot](https://askubuntu.com/a/1314343)

## References

- [ProtonDB](https://www.protondb.com/) - Gaming know-how from the Linux and Steam Deck community
