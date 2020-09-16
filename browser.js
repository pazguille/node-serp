const puppeteer = require('puppeteer');
let browser = null;
let page = null;

module.exports = async (url) => {
	if (!browser) {
		browser = puppeteer.launch();
	}

	page = await browser.newPage();

	return await page.goto(url);
}