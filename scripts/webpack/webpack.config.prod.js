var entry = require('./webpack-configs/entry.js');
var output = require('./webpack-configs/output.js');
var modules = require('./webpack-configs/module.js');
var plugins = require('./webpack-configs/plugins.js');

module.exports = {
	entry:entry,
	output: output,
	module: modules,
	plugins: [
		plugins.HtmlWebpackPluginConfig
	]
}

