---
outline: deep
---

# Networking

## Interface

```bash
# disable network interface
sudo ifconfig wlan0 down
```

## ssh

```bash
# create SSH key
ssh-keygen -t ed25519

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
