process.env.NODE_ENV = 'development';

var entry = require('./webpack-configs/entry.js');
var plugins = require('./webpack-configs/plugins');
var modules = require('./webpack-configs/modules.js');
var devServer = require('./webpack-configs/dev-server.js');
var extResolve = require('./webpack-configs/resolve.js');

module.exports = {
	entry:entry,
	plugins: [],
	module: modules,
	devServer: devServer,
	resolve: extResolve
}
