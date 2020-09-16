const LOCATION_SECRET = 'w+CAIQICI';
const LOCATION_PARAM = 'uule';

const keys = require('./json/uule.keys.json');
const { Base64 } = require('js-base64');

module.exports = (location) => {
	if (keys.hasOwnProperty(location.length) === -1) {
		return false;
	}

	const key = keys[location.length];

	return LOCATION_SECRET+key+Base64.encode(location);
}