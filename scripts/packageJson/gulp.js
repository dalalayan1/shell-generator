module.exports = {
    scripts: {
        "start": "npm run build && npm run server",
        "build": "npm run clean && gulp",
        "server": "node server"
    },
    devDependencies: {
        "babel-preset-es2015": "*",
        "babel-preset-react": "*",
        "babelify": "*",
        "browserify": "*",
        "gulp": "*",
        "vinyl-source-stream": "*"
    }
}