const copyDir = require('copy-dir').sync;
const path = require('path');
const fs = require('fs');
const exists = fs.existsSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;

var insertStyleLint = function insertStyleLint(file) {

    var contents,requires,configs,plugins,insertPlugins,finalWebpack;

    contents = readFile(file,'utf8').split('module.exports = ');
    requires = contents[0];
    requires = requires + 'var StyleLintPlugin = require("stylelint-webpack-plugin");\n';
    configs = contents[1];
    plugins = configs.split('plugins: [');
    insertPlugins = plugins[1];
    insertPlugins = '\n\t\tnew StyleLintPlugin({\n\t\tconfigFile: \'./.stylelintrc\',\n\t\tfailOnError: false\n\t}),\n' + insertPlugins;
    
    finalWebpack = requires + '\nmodule.exports = ' + plugins[0] + '\n\tplugins: [' + insertPlugins;
    
    writeFile(file,finalWebpack,'utf8');

    updatePackageJson("stylelint-webpack-plugin");

    copyDir('./scripts/style-linting','./');
}

var updatePackageJson = function updatePackageJson(module){
    var newModule = {
      [module] : "*"
    }
    var packageJson = path.join(process.cwd(),'package.json');
    var packageJsonContents = require(packageJson);
    var pkgDevDependencies = packageJsonContents["devDependencies"];
    pkgDevDependencies = Object.assign({},pkgDevDependencies,newModule);
    packageJsonContents["devDependencies"] = pkgDevDependencies;
    writeFile(packageJson,JSON.stringify(packageJsonContents,0,2));
}

var createPkgJson = function createPkgJson(pkgjson,pkgFile,webpackPkg){
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