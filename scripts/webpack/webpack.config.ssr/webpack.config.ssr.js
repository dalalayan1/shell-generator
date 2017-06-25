'use strict';

var path = require('path');
var webpack = require('webpack')
module.exports = {
  devtool: '#inline-source-map',
  entry: [
	'webpack-hot-middleware/client',
	'./src/main.js'
  ],
  output: {
	path: path.join(__dirname, 'build'),
	filename: 'bundle.js',
	publicPath: '/static/'
  },

  plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin()
  ],
  resolve: {
	alias: {
	},
	extensions: ['.js', '.jsx']
  },
  module: {
	loaders: [
		{
		  test: /\.jsx?$/,
		  loader: 'babel-loader',
		  exclude: /node_modules/,
		  include: __dirname,
		  query: {
		    presets: [ 'react-hmre', "es2015", "stage-0", "react" ],
		    plugins: [ "transform-decorators-legacy" ],
		  }
		},
		{
		  test: /\.css$/,
		  loader: "style!css",
		},
	]
  }
};
