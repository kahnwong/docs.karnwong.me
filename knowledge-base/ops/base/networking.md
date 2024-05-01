---
outline: deep
---

# Networking

## DNS

- [deSEC](https://desec.io) - Modern DNS Hosting for Everyone.
- [DuckDNS](https://www.duckdns.org)
- [mess with dns](https://messwithdns.net/) - DNS playground.
- [Cloudflare DDNS Updater](https://github.com/K0p1-Git/cloudflare-ddns-updater/blob/main/cloudflare-template.sh)

### Blocklist

- [The Big Blocklist Collection](https://firebog.net)
- [FB_Whitelist](https://github.com/zlatco/FB_Whitelist) - A Host file to whitelist as little as possible for Facebook and Messenger, while still making them usable!

## Protocols

- [IPv6 Cheat Sheet](https://github.com/onemarcfifty/cheat-sheets/blob/main/networking/ipv6.md)

## VPN

- [headscale](https://headscale.net/) - Open source, self-hosted implementation of the Tailscale control server.
- [tailscale](https://tailscale.com/download/linux) - The easiest, most secure way to use WireGuard and 2FA.

## Tools

- [CanYouSeeMe](https://canyouseeme.org) - Open Port Check Tool.
- [geonet](https://geonet.shodan.io/) - Run Network Tools from Multiple Geographic Locations
- [Global Response Time Checker](https://checker.ddosify.com/)
- [ngrok](https://ngrok.com/) - ngrok allows you to expose a web server running on your local machine to the internet. Just tell ngrok what port your web server is listening on.

### Speedtest

- [Fast.com](https://fast.com/) - How fast is your download speed? In seconds, FAST.com's simple Internet speed test will estimate your ISP speed.
- [Internet Speed Test](https://speed.cloudflare.com/)

## Cookbooks

### Intercepting HTTPS traffic on iOS

<https://www.charlesproxy.com/documentation/using-charles/ssl-certificates/>

1. Start proxy server
2. Specify proxy for Wi-Fi SSID
3. Obtain SSL cert via <https://chls.pro/ssl>
4. Install cert (Settings > General > VPN & Device Management)
5. Trust cert (Settings > General > About > Certificate Trust Settings)
