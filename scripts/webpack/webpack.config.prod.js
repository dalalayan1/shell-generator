var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template : __dirname + '/src/index.html',
  filename : 'index.html',
  inject : 'body'
});

module.exports = {
	entry:[
		'./src/main.js'
		],
	output: {
		path: __dirname + '/dist',
		filename: 'js/bundle.js'
	},
	module: {
		loaders: [
			{
				test:/.jsx?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets: ["es2015", "react", "stage-0"]
				}
			}
		]
	},
	plugins: [
		HtmlWebpackPluginConfig
	]
}

