const copyDir = require('copy-dir').sync;
const path = require('path');
const fs = require('fs');
const exists = fs.existsSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;

var insertStyleLint = function insertStyleLint(file) {
    var contents = readFile(file,'utf8').split('module.exports = ');
    var requires = contents[0];
    requires = requires + 'var StyleLintPlugin = require("stylelint-webpack-plugin");\n';
    var configs = contents[1];
    var plugins = configs.split('plugins: [');
    var insertPlugins = plugins[1];
    insertPlugins = '\n\t\tnew StyleLintPlugin({\n\t\tconfigFile: _path,\n\t\tfailOnError: false\n\t}),\n' + insertPlugins;
    var finalWebpack = requires + '\nmodule.exports = ' + plugins[0] + '\n\tplugins: [' + insertPlugins;
    console.log('contents ',finalWebpack);
    writeFile(file,finalWebpack,'utf8');

}

var createPkgJson = function createPkgJson(pkgjson,pkgFile){
    writeFile(pkgjson,JSON.stringify({
    "name": "shell-gen",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "scripts": (true && Object.assign({},pkgFile.scripts,webpackPkg.scripts)),
    "dependencies": pkgFile.dependencies,
    "devDependencies": (true && Object.assign({},pkgFile.devDependencies,webpackPkg.devDependencies)),
  },null,2),'utf8');

}

var createFile = function createFile(file,contents){
  writeFile(file,contents,'utf8');
}

var copyDirectory = function copyDirectory(source,dest){
  copyDir(source,dest);
}

module.exports = {
    copyDirectory,
    createFile,
    createPkgJson,
    insertStyleLint
}