---
outline: deep
---

# OSX

## Fix "App is damaged and can't be opened. You should move it to the trash"

```bash
sudo xattr -rd com.apple.quarantine /Applications/Coherence\ Pro.app
```

## Fix iCloud sync stuck

```bash
killall bird
```

or

<https://apple.stackexchange.com/questions/434190/icloud-stuck-on-uploading-x-items-y-of-y-monterey-12-1/454761#454761>

## Apps

- [Three](https://github.com/dena-sohrabi/There) - Track timezones 🌍
