process.env.NODE_ENV = 'production';

var entry = require('./webpack-configs/entry.js');
var output = require('./webpack-configs/output.js');
var modules = require('./webpack-configs/modules.js');
var plugins = require('./webpack-configs/plugins');
var extResolve = require('./webpack-configs/resolve.js');

module.exports = {
	entry:entry,
	output: output,
	module: modules,
	resolve: extResolve,
	plugins: [
		plugins.HtmlWebpackPluginConfig
	]
}

