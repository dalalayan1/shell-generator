const copyDir = require('copy-dir').sync;
const path = require('path');
const fs = require('fs');
const exists = fs.existsSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;

const fsUtils = require('./fs-utils.js');

var updatePackageJson = function updatePackageJson(module){
    var newModule = {
      [module] : "*"
    }
    var packageJson = path.join(process.cwd(),'package.json');
    var packageJsonContents = require(packageJson);
    var pkgDevDependencies = packageJsonContents["devDependencies"];
    pkgDevDependencies = Object.assign({},pkgDevDependencies,newModule);
    packageJsonContents["devDependencies"] = pkgDevDependencies;
    fsUtils.writeToFile(packageJson,JSON.stringify(packageJsonContents,0,2));
}

var createPkgJson = function createPkgJson(pkgjson,pkgFile,webpackPkg){
    fsUtils.writeToFile(pkgjson,JSON.stringify({
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
  },null,2));

}

module.exports = {
    createPkgJson,
    updatePackageJson
}