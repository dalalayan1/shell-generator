var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template : __dirname + '/src/index_build.html',
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
			}
		},
		{
			test: /\.scss$/,
			loader: 'style-loader!css-loader!sass-loader'
		}

		]
	},
	plugins: [
		HtmlWebpackPluginConfig
	]
}

