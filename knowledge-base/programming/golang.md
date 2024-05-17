---
outline: deep
---

# Golang

## Libraries

- [clipboard](https://github.com/golang-design/clipboard) - 📋 cross-platform clipboard package that supports accessing text and image in Go (macOS/Linux/Windows/Android/iOS)
- [cobra](https://github.com/spf13/cobra) - A Commander for modern Go CLI interactions
- [color](https://github.com/fatih/color) - Color package for Go
- [env](https://github.com/caarlos0/env) - A simple and zero-dependencies library to parse environment variables into structs
- [godotenv](https://github.com/joho/godotenv) - A Go port of Ruby's dotenv library (Loads environment variables from .env files)
- [huh](https://github.com/charmbracelet/huh) - Build terminal forms and prompts 🤷🏻‍♀️

## Cookbooks

### Reduce binary size

```bash
go build -ldflags="-s -w" <your-package>
```

### Receive multiple returns from goroutine

<https://stackoverflow.com/a/17825968>

## Resources

- [Convert JSON to Go struct](https://mholt.github.io/json-to-go/)
- [golang styleguide](https://google.github.io/styleguide/go/)
- [Uber Go Style Guide](https://github.com/uber-go/)
