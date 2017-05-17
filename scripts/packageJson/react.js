module.exports = {
  scripts: {
    "clean": "rimraf dist",
    "start": "webpack-dev-server --content-base",
    "build": "npm run build:webpack && npm run server",
    "build:webpack": "npm run clean && webpack --config webpack.config.prod.js",
    "server": "node server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  dependencies: {
    "react": "*",
    "react-dom": "*"
  },
  devDependencies: {
    "express": "*",
    "open": "*"
  }
}
