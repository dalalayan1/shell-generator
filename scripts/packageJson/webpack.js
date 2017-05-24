module.exports = {
    scripts: {
        "start": "webpack-dashboard -c cyan webpack-dev-server --content-base",
        "build": "npm run clean && webpack --config webpack.config.prod.js",
        "server": "webpack-dashboard -c magenta node server"
    },
    devDependencies: {
        "babel-core": "*",
        "babel-loader": "*",
        "babel-plugin-transform-decorators-legacy": "*",
        "babel-preset-es2015": "*",
        "babel-preset-react": "*",
        "babel-preset-stage-0": "*",
        "css-loader": "*",
        "style-loader": "*",
        "html-webpack-plugin": "*",
        "webpack": "*",
        "webpack-dashboard": "*",
        "webpack-dev-server": "*",
        "webpack-hot-middleware": "*"
    }
}