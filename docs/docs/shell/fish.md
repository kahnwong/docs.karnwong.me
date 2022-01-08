---
title: fish
---

## Install
```
$ brew install fish
$ curl -fsSL https://starship.rs/install.sh | bash
```

## fish_config
https://github.com/fish-shell/fish-shell/issues/1916


* viewing the temp file fish creates to see what port the webserver is bound to (I had 8000)
* opening a second ssh session and tunneling the port to localhost.  example:
  `ssh -L 8000:localhost:8000 user@host`
* opening my browser to the link referenced in the temp file.
