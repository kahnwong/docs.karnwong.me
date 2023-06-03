# Compression

| Kind | Compression                                    | Extraction                   |
| ---- | ---------------------------------------------- | ---------------------------- |
| tar  | `-czvf ARCHIVE.tar.gz FILE_OR_FOLDER`          | `-xzvf TAR_FILE -C OUT_PATH` |
| gzip | `FILE`                                         |                              |
| zip  | `ARCHIVE.zip FILE` or `-r ARCHIVE.zip PATTERN` |                              |

```bash
# compress each file as gzip
for i in */*.jl; do echo "$i" && gzip "$i"; done

## as zip
for i in *.csv; do zip `basename $i .csv`.zip $i; done

# compress each folder
for i in *; do zip -r `basename $i`.cbz $i; done
```
