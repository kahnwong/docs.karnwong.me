---
title: System
---

## Mount & Umount

```bash
$ apt install ntfs-3g

## https://gist.github.com/etes/aa76a6e9c80579872e5f
sudo blkid # find devices
mkdir /mnt/volume
sudo chmod 770 /mnt/volume # set permission for mount point
sudo mount /dev/sda1 /mnt/volume

# Auto mount at boot
sudo nano /etc/fstab
UUID=D424912B2491119A /mnt/media FILE_SYSTEM uid=1000,gid=1000,nofail,umask=0 0 0
```

## journalctl

```bash
# set maximum storage for logs
https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs

# prune logs
journalctl --vacuum-size=1G
```

## Process

```bash
# kill all task containing a name
pkill -9

# see killed processes
dmesg

# kill all processes
killall python3

# kill all processes - from grep
ps aux | grep "node dist/server.js" | grep -v grep | awk {'print $2'} | xargs kill -9

# get resources usage
top -p $PID

## MacOS
top -pid $PID
```

## Sensors

```bash
sudo apt-get install lm-sensors
sensors
```
