# node-serp

A scraper for realtime Google Search Results based on Puppeteer and reverse-engineering parts of the Google Search `GET` API.

> ### Disclaimer
> This module is developed as part of a larger private project and made available to the opensource community as is.
> The project does not accept pull requests, but it will aim for a good developer experience for all. Feel free to fork it for your own use.

## Features

- Get realtime data from Google Search
- Get real results using browser emulation
- Get real mobile results (WIP)
- Get location based results
- Get all result types (WIP)

## Usage

`nodeSerp(query, limit = 1, location = false, mobile = false)`

```
const serp = require('node-serp');
const results = await serp('hello world');

console.log(results)
```

## Roadmap

- [x] Working prototype
- [x] Extendable structure
- [x] Organic results
- [x] Paid results
- [x] Map results
- [ ] Answer box
- [ ] Image results
- [ ] Video results
- [ ] Shopping results
- [ ] Social results