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
        "babel-preset-es2015": "^6.24.1",
        "babel-preset-react": "*",
        "babel-preset-react-app": "^2.1.0",
        "babel-preset-react-hmre": "^1.1.1",
        "babel-preset-stage-0": "*",
        "css-loader": "*",
        "express": "*",
        "html-webpack-plugin": "*",
        "json-loader": "*",
        "node-sass": "*",
        "open": "*",
        "sass": "*",
        "sass-loader": "*",
        "style-loader": "*",
        "stylelint-webpack-plugin": "*",
        "webpack": "^3.0.0",
        "webpack-dev-middleware": "^1.10.2",
        "webpack-dev-server": "^2.x.x",
        "webpack-hot-middleware": "*"
    }
}