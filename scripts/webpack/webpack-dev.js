
module.exports = {
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
	plugins: [],
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
	}
}
