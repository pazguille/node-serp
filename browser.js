const puppeteer = require('puppeteer');
let browser = null;

module.exports = async (url) => {
	if (!browser) {
		browser = await puppeteer.launch();
	}

	let page = await browser.newPage();
	await page.goto(url);
	return page; 
}