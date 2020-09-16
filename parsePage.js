const rules = {
	'map': {
		'item': '.rllt__borderless',
		'heading': '.dbg0pd',
		'snippet': '.rllt__details',
		'link': '.rllt__link'
	},
	'paid': {
		'item': '.ads-fr',
		'heading': 'div[role=heading] span',
		'snippet': '.MUxGbd:not([role=heading]) span',
		'link': '.Krnil'
	},
	'organic': {
		'item': '.g',
		'heading': '.LC20lb',
		'snippet': '.st',
		'link': '.r a'
	}
};

module.exports = async (page) => {

	return await page.$eval('body', (body, rules) => {
		let results = {};
		for (let [section, rule] of Object.entries(rules)) {
			let items = Array.from(body.querySelectorAll(rule.item));
			let position = 1;
			results[section] = items.map(item => {
				return {
					p: position++,
					h: item.querySelector(rule.heading).textContent,
					d: item.querySelector(rule.snippet).textContent,
					a: item.querySelector(rule.link).href
				}
			});
		}
		return results;
	}, rules);
}