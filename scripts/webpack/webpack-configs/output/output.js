var path = require('path');

module.exports = {
		filename: 'bundle.js', //code-splitting done with chunkhash(hashing)
		path: path.join(__dirname, 'dist'),
		publicPath: '/static/'
	}