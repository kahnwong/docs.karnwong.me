# Ubuntu

## Distro upgrade

```bash
do-release-upgrade -c
do-release-upgrade
```

## Ubuntu server headless setup

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

## Change repository mirror on ARM

<https://askubuntu.com/questions/428698/are-there-alternative-repositories-to-ports-ubuntu-com-for-arm>

## Specify Wi-Fi band

<https://askubuntu.com/questions/183525/how-to-set-wifi-driver-settings-to-prefer-5-ghz-channel-above-2-4-ghz>

## Fix Wi-Fi keeps disconnecting

- <https://askubuntu.com/questions/1403773/22-04-wifi-keeps-disconnecting-for-a-few-seconds-frequently/1421333#1421333>

and

```bash
sudo vi /etc/NetworkManager/conf.d/default-wifi-powersave-on.conf
# then change wifi.powersave to 2
# see code: <https://gist.github.com/jcberthon/ea8cfe278998968ba7c5a95344bc8b55>
```
