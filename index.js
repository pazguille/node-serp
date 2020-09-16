const browser = require('browser.js');
const parsePage = require('parsePage.js');
const getLocation = require('getLocation.js');

const baseUrl = 'https://www.google.com/search';

module.exports = async (query, location = false, pages = 1, mobile = false) => {
	let options = {};
	options.q = query;

	if (location && getLocation(location)) {
		options.uule = getLocation(location);
	}

	const searchParams = new URLSearchParams(options);
	const page = browser(baseUrl+searchParams.toString());
	const result = await page.evaluate(parsePage);
	page.close();

	return results;
}