process.env.NODE_ENV = 'development';

var entry = require('./webpack-configs/entry.js');
var modules = require('./webpack-configs/modules.js');
var devServer = require('./webpack-configs/dev-server.js');
var extResolve = require('./webpack-configs/resolve.js');

module.exports = {
	devtool: '#inline-source-map',
	entry:entry,
	plugins: [
		plugins.ModuleConcatenationPlugin,
		plugins.HMRPlugin
		],
	module: modules,
	devServer: devServer,
	resolve: extResolve
}
