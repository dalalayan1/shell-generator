module.exports = {
    scripts: {
        "start": "webpack-dev-server --open --hot --history-api-fallback",
        "build": "npm run clean && webpack --config webpack.config.prod.js",
        "server": "node server"
    },
    devDependencies: {
        "babel-core": "*",
        "babel-loader": "*",
        "babel-plugin-transform-decorators-legacy": "*",
        "babel-preset-es2015": "*",
        "babel-preset-react": "*",
        "babel-preset-react-app": "^2.1.0",
        "babel-preset-stage-0": "*",
        "css-loader": "*",
        "json-loader":"*",
        "style-loader": "*",
        "html-webpack-plugin": "*",
        "stylelint-webpack-plugin": "*",
        "webpack": "^2.x.x",
        "webpack-dev-server": "^2.x.x",
        "webpack-hot-middleware": "*"
    }
}