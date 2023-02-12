---
title: Networking
---

## Interface

```bash
# disable network interface
sudo ifconfig wlan0 down
```

## wget

```bash
# download from file
wget -i links.txt

# recursive crawl
wget --recursive --no-parent -w 3 --random-wait -c -i urls.txt
```

## ssh

```bash
# create SSH key
ssh-keygen -b 2048 -t rsa

# SSH config
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa

# disable password auth
$ sudo nano /etc/ssh/sshd_config
## change this line
PasswordAuthentication no
## restart
$ sudo /etc/init.d/ssh restart

# port forwarding
ssh -L 5000:targethost:5000 NAME@TUNNEL_HOST

# add key to ssh-agent
ssh-add --apple-use-keychain $KEY_PATH
```

## Cookbook

### check internet speed via terminal

```bash
curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -
```

### plot IP location on map

```bash

host spotify.com | iponmap -c
```
