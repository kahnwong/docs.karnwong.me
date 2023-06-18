---
outline: deep
---

# OSX

## Fix gpg failed to sign data

- <https://gist.github.com/troyfontaine/18c9146295168ee9ca2b30c00bd1b41e>
- <https://www.javaer101.com/en/article/7148461.html>

## Monitor throttling

`pmset -g thermlog`

## Fix "App is damaged and can't be opened. You should move it to the trash"

```bash
sudo xattr -rd com.apple.quarantine /Applications/Coherence\ Pro.app
```

## Fix iCloud sync stuck

```bash
killall bird
```
