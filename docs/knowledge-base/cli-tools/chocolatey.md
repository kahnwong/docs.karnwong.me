---
title: Chocolatey
---

## Install

PowerShell only

```
iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))
```

## Usage

```bash
choco uninstall $app
clist -lo
cinst -y [package names]
choco search [package name]
```

```bash title="recipe"
cinst -y 7zip.install ccleaner cdburnerxp defraggler ditto f.lux fastcopy filezilla flac focuswriter foxitreader freefilesync fsviewer geany googlechrome googledrive handbrake itunes mkvtoolnix mp3tag nexusfile notepadplusplus.install recuva sharex steam sumatrapdf vlc windirstat winrar crystaldiskinfo
```
