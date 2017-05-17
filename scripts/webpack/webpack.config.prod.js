var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template : __dirname + '/src/index_build.html',
  filename : 'index.html',
  inject : 'body'
});

console.log('running webpack-prod');

var config = {
	entry:[
		'./src/main.js'
		],
	output: {
		path: __dirname + '/dist',
		filename: 'js/bundle.js'
	},
	devServer: {
		inline: true,
		contentBase:'./',
		port:3001
	},
	module: {
		loaders: [
		{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			query:{
				presets: ["es2015", "react", "stage-0"]
			},
			include: path.join(__dirname, 'src')
		},
		{
			test: /\.scss$/,
			loader: 'style-loader!css-loader!sass-loader',
			include: path.join(__dirname, 'src')
		}

		]
	},
	plugins: [
		HtmlWebpackPluginConfig
	]
}
module.exports = config;
