# node-serp

A scraper for realtime Google Search Results based on Puppeteer and reverse-engineering parts of the Google Search `GET` API.

> ### Disclaimer
> This module is developed as part of a larger private project and made available to the opensource community as is.
> The project does not accept pull requests, but feel free to fork it for your own use.

## Features

- Get realtime data from Google Search
- 

## Usage

`nodeSerp(query, limit = 1, location = false, mobile = false)`

```
const serp = require('node-serp');
const results = await serp('hello world');

console.log(results)
```
+
## Roadmap

- [x] Working prototype
- [x] Extendable structure
- [x] Organic results
- [x] Paid results
- [x] Map results
- [] Answer box
- [] Image results
- [] Video results
- [] Shopping results
- [] Social results