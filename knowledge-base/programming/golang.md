---
outline: deep
---

# Golang

## Libraries

- [clipboard](https://github.com/golang-design/clipboard) - 📋 cross-platform clipboard package that supports accessing text and image in Go (macOS/Linux/Windows/Android/iOS)
- [cobra](https://github.com/spf13/cobra) - A Commander for modern Go CLI interactions
- [color](https://github.com/fatih/color) - Color package for Go
- [go-querystring](https://github.com/google/go-querystring) - go-querystring is Go library for encoding structs into URL query strings
- [godotenv](https://github.com/joho/godotenv) - A Go port of Ruby's dotenv library (Loads environment variables from .env files)
- [gofiber](https://github.com/gofiber/fiber/v2) - ⚡️ Express inspired web framework written in Go
- [gopsutil](https://github.com/shirou/gopsutil) - psutil for golang
- [huh](https://github.com/charmbracelet/huh) - Build terminal forms and prompts 🤷🏻‍♀️
- [requests](https://github.com/carlmjohnson/requests) - HTTP requests for Gophers
- [sops](https://pkg.go.dev/github.com/getsops/sops/v3)
- [viper](https://github.com/spf13/viper) - Go configuration with fangs
- [zerolog](https://github.com/rs/zerolog) - Zero Allocation JSON Logger

## Cookbook

### Reduce binary size

```bash
go build -ldflags="-s -w" <your-package>
```

### Receive multiple returns from goroutine

<https://stackoverflow.com/a/17825968>

## Resources

- [Convert JSON to Go struct](https://mholt.github.io/json-to-go/)
- [golang styleguide](https://google.github.io/styleguide/go/)
- [Uber Go Style Guide](https://github.com/uber-go/guide/blob/master/style.md)
- [Errors in Go](https://miparnisariblog.wordpress.com/2024/07/28/errors-in-go/)
- [Go by Example](https://gobyexample.com/)
