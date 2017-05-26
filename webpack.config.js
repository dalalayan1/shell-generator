const path = require('path');
const nodeExternals = require('webpack-node-externals');
	
module.exports = {
	  name: 'server',
    target: 'node',
    externals: nodeExternals(),  
	  entry: [
      './app/SSR.js'
    ],
	  output: {
	    path: path.join(__dirname, '/dist'),
	    filename: 'SSR.js',
	    libraryTarget: 'commonjs2',
	  },
    module: {
      loaders: [{
        test:/.jsx?$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{
          presets: ["es2015", "react", "stage-0"]
        }
      }]
    }
};