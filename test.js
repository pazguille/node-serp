const SERP = require('./index.js');

const run = async () => {
	console.warn('=== DESKTOP TEST ===');
	console.log(await SERP('pub crawl budapest'));

	console.warn('=== LOCATION TEST ===');
	console.log(await SERP('pub crawl budapest', 'Abu Dhabi,Abu Dhabi,United Arab Emirates'));

	// Todo: add tests for mobile & multiple pages
}
run()