---
title: Unix
---

## Archive

| Kind | Compression                                    | Extraction                   |
| ---- | ---------------------------------------------- | ---------------------------- |
| tar  | `-czvf ARCHIVE.tar.gz FILE_OR_FOLDER`          | `-xzvf TAR_FILE -C OUT_PATH` |
| gzip | `FILE`                                         |                              |
| zip  | `ARCHIVE.zip FILE` or `-r ARCHIVE.zip PATTERN` |                              |

### Recipes

```bash
# compress each file as gzip
for i in */*.jl; do echo "$i" && gzip "$i"; done

## as zip
for i in *.csv; do zip `basename $i .csv`.zip $i; done

# compress each folder
for i in *; do zip -r `basename $i`.cbz $i; done

### loop list from a file
IFS=$'\n' images=($(cat need_to_process_files.txt))
for i in ${images[@]}
do
    aws s3 cp "s3://$BUCKET_NAME/$i" images/
done
```

## bash

```bash
# loop
for file in *.txt; do cat $file; done

# if-else
if [ $(whoami) = 'root' ]; then
 echo "You are root"
else
 echo "You are not root"
fi

# split file
split -l 300 file.txt new
split -b 500m httpd.log

# replace string  in text file
sed -i 's/old-text/new-text/g' input.txt

## osx
sed -i .bak 's/old-text/new-text/g' input.txt

## recursive
grep -rl old-text . | xargs sed -i '' 's/old-text/new-text/g'

# send grep output to mv
grep -l 'Subject: \[SPAM\]' | xargs -I '{}' mv '{}' DIR

# base64 binary decode
echo "$myImgStr" | base64 -d > image2.jpg
```

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

## openssl

```bash
# generate password
docs openssl rand -base64 24
```

## rsync

```bash
# copy with progress bar
rsync -ah --progress source-file destination-file

# move files
--remove-source-files

# ignore folder
rsync -avm --exclude='node_modules' --progress $HOST:$PATH $TARGET/
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

## wget

```bash
# download from file
wget -i links.txt

# recursive crawl
wget --recursive --no-parent -w 3 --random-wait -c -i urls.txt
```

## System

```bash
# kill all task containing a name
pkill -9

# see killed processes
dmesg

# kill all processes
killall python3

# check internet speed via terminal
curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -

# disable network interface
sudo ifconfig wlan0 down
```

## Recipes

```bash
# plot IP location on map
host spotify.com | iponmap -c
```

## Resources

- [Computing from the Command Line](https://learnbyexample.github.io/cli-computing/preface.html) - 🐧 Linux command line and Scripting guide for beginner to intermediate users.
