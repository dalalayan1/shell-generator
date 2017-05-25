module.exports = {
                test:/.jsx?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets: ["es2015", "react", "stage-0"]
				}
}