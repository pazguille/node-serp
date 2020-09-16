module.exports = () => {
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