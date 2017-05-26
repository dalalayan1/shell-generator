var entry = require('./webpack-configs/entry.js');
var output = require('./webpack-configs/output.js');
var plugins = require('./webpack-configs/plugins.js');
var modules = require('./webpack-configs/module.js');
var devServer = require('./webpack-configs/dev-server.js');

module.exports = {
	entry:entry,
	plugins: [],
	module: modules,
	devServer: devServer
}
