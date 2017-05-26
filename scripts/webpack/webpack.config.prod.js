var entry = require('./webpack-configs/entry.js');
var output = require('./webpack-configs/output.js');
var modules = require('./webpack-configs/modules.js');
var plugins = require('./webpack-configs/plugins');

module.exports = {
	entry:entry,
	output: output,
	module: modules,
	plugins: [
		plugins.HtmlWebpackPluginConfig
	]
}

