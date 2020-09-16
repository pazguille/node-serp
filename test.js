const SERP = require('./index.js');

const run = async () => {
	console.warn('=== DESKTOP TEST ===');
	console.log(await SERP('escape room budapest'));

	// Todo: add tests for location, mobile & multiple pages
}
run()