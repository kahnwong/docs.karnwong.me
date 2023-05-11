---
title: Unix
---

## Flow control

```bash
# loop
for file in *.txt; do cat $file; done

# if-else
if [ $(whoami) = 'root' ]; then
 echo "You are root"
else
 echo "You are not root"
fi
```

## base64

```bash
# base64 binary decode
echo "$myImgStr" | base64 -d > image2.jpg
```

## jq

```bash
# string -> json
jq '.c | fromjson | .id' myFile.json


# json -> string
echo '{ "foo": [ "bar", "baz" ] }' | jq tostring
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

## sed

```bash
# replace string in text file
sed -i 's/old-text/new-text/g' input.txt

## can also use `#` as separator
sed -i.bak 's#$HOME#/home/runner/work#' scripts/docker-pytest.sh

## osx
sed -i .bak 's/old-text/new-text/g' input.txt

## recursive
grep -rl old-text . | xargs sed -i '' 's/old-text/new-text/g'

```

## split

```bash
split -l 300 file.txt new
split -b 500m httpd.log
```

## Cookbook

### Generate random number

```bash
r=$(( $RANDOM % 1000 + 1 ))
```

### Check if file exists

```bash
if [ -f ".env" ]; then
 source ./.env
else
 echo "env doesn't exist!"
    exit 1
fi
```

### Loop list from a file

```bash
IFS=$'\n' images=($(cat need_to_process_files.txt))
for i in ${images[@]}
do
    aws s3 cp "s3://$BUCKET_NAME/$i" images/
done
```

## Linux on Macbook

- [troubleshooting not waking up after closing the lid](https://askubuntu.com/a/1020883)

## Resources

- [Computing from the Command Line](https://learnbyexample.github.io/cli-computing/preface.html) - 🐧 Linux command line and Scripting guide for beginner to intermediate users.
- [linux-insides](https://0xax.gitbooks.io/linux-insides) - A book-in-progress about the linux kernel and its insides.
- [Chmod Calculator](https://chmod-calculator.com/)
- [Unix shell script tactics](https://github.com/SixArm/unix-shell-script-tactics)
- [explainshell](https://explainshell.com/) - Write down a command-line to see the help text that matches each argument.
