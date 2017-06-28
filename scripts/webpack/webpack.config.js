process.env.NODE_ENV = 'development';

var entry = require('./webpack-configs/entry/entry.js');
var output = require('./webpack-configs/output/output.js');
var modules = require('./webpack-configs/modules.js');
var plugins = require('./webpack-configs/plugins.js');
var devServer = require('./webpack-configs/dev-server.js');
var extResolve = require('./webpack-configs/resolve.js');

module.exports = {
	devtool: '#inline-source-map',
	entry:entry,
	output: output,
	plugins: [
		plugins.ModuleConcatenationPlugin,
		plugins.HMRPlugin
		],
	module: modules,
	devServer: devServer,
	resolve: extResolve
}
