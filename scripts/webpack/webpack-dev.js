var path = require('path');

console.log('running webpack-dev');

var config = {
	entry:[
		'./src/main.js'
		],
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js',
        publicPath: '/'
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
	}
}
module.exports = config;