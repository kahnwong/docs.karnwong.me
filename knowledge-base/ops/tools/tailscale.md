---
outline: deep
---

## Tailscale tunnel setup

Config via Tailscale UI

```bash
1. Create acl tags
2. Assign owner to current user
3. Assign tag to device
```

Usage with github actions:

```yaml
- name: Tailscale
  uses: tailscale/github-action@v2
  with:
    oauth-client-id: ${{ secrets.TS_OAUTH_CLIENT_ID }}
    oauth-secret: ${{ secrets.TS_OAUTH_SECRET }}
    tags: tag:ci
```
