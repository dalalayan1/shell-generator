var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template : __dirname + '/src/index.html',
  filename : 'index.html',
  inject : 'body'
});

var entry = require('./webpack-configs/entry.js')||[];
var output = require('./webpack-configs/output.js')||{};
var modules = require('./webpack-configs/module.js')||{};

module.exports = {
	entry:entry,
	output: output,
	module: modules,
	plugins: [
		HtmlWebpackPluginConfig
	]
}

