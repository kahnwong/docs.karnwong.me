---
outline: deep
---

# Linux

## Distros

- [Bazzite](https://github.com/ublue-os/bazzite) - Bazzite is a custom image built upon Fedora Atomic Desktops that brings the best of Linux gaming to all of your devices - including your favorite handheld
- [RebornOS](https://rebornos.org/)

## Cookbook

### Linux on Macbook

- [macbook12-bluetooth-driver](https://github.com/leifliddy/macbook12-bluetooth-driver)
- [snd_hda_macbookpro](https://github.com/davidjo/snd_hda_macbookpro/) - Kernel audio driver for Macs with 8409 HDA chip + MAX98706/SSM3515 amps.

### Ubuntu server headless setup

Alternatively, you can use [raspberry-pi-imager](https://www.raspberrypi.com/software/)

1. Flash OS
1. `touch ssh` at `boot volume`
1. `vi network-config` and add following config for Wi-Fi at `boot volume`:

```yaml
wifis:
  wlan0:
    dhcp4: true
    optional: true
    access-points:
      $WiFiSSID:
        password: $PASSWORD # string
```

### Set default editor

```bash
sudo update-alternatives --config editor
```
