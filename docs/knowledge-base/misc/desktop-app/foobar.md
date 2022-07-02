---
title: foobar
---

```
# sort
%album artist% - %DATE% - %ALBUM% - %DISCNUMBER% - %TRACKNUMBER% - %TITLE%

# Auto Playlist
%path% HAS \Films & TV (Asian) SORT BY album artist

%path% HAS \Motion Pictures\the hobbit   SORT BY   %DATE% - %ALBUM% - %DISCNUMBER%  AND %path% HAS  \Motion Pictures\the lord of the rings SORT BY   %DATE% - %ALBUM% - %DISCNUMBER%

# Sort by Year
%album artist% - $sub(9999,$year(%date%)) - %album% - %discnumber% - %tracknumber% - %title%
```
