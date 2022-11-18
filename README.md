# docs.karnwong.me

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Init

```bash
npm init docusaurus@latest
```

## Usage

```bash
yarn install
yarn start # http://localhost:3000
```

## Validate links

```bash
# npm install -g markdown-link-check
fd md -0 | xargs -0 -n1 markdown-link-check
```
