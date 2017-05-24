module.exports = {
    scripts: {
        "start": "webpack-dev-server --content-base",
        "build": "npm run build:webpack",
        "build:webpack": "npm run clean && webpack --config webpack.config.prod.js",
        "server": "node server"
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
        "webpack-dev-server": "*",
        "webpack-hot-middleware": "*"
    }
}