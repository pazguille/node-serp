const puppeteer = require('puppeteer');

class SerpParser {

	constructor() {
		this.browser = null;
	}

	async getBrowser() {
		if (!this.browser) {
			this.browser = await puppeteer.launch();
		}
		return this.browser;
	}

	async getResultPages($query, $pages = 1) {

	}

	async getResultPage(url) {
		const browser = await this.getBrowser()
		const page = await browser.newPage()
		await page.goto(url);
		const results = await page.evaluate(this.parsePage);
		page.close();
		return results;
	}

	parsePage() {
		const rules = {
			'paid': {
				'item': '.ads-fr',
				'heading': 'div[role=heading] span',
				'snippet': '.MUxGbd:not([role=heading]) span',
				'link': '.Krnil'
			},
			'organic': {
				'item': '.g',
				'heading': '.r h3',
				'snippet': '.st',
				'link': '.r a'
			}
		};
		let allResults = {};

		for(let [name, rule] in rules) {
			let elements = [...document.querySelectorAll(rule.item)];

			allResults[name] = elements.reduce((parsed, result) => {
				parsed.push({
					p: i+1,
					h: result.querySelector(rule.heading).textContent,
					d: result.querySelector(rule.snippet).textContent,
					a: result.querySelector(rule.link).href
				})
				return parsed;
			}, []);
		}
		return allResults;
	}

	parseResult
}


const run = async () => {
	parser = new SerpParser();
	console.log(await parser.getResultPage('https://www.google.com/search?q=escape+room+budapest'))
}
run()