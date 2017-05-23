const path = require('path');

const fsUtils = require('./fs-utils.js');

var addDevserver = function addDevserver(){
   fsUtils.copyDirectory('./scripts/devServer','./');
   updatePackageJson(["express","open"]);
}

var createPkgJson = function createPkgJson(pkgjson,pkgFile,webpackPkg){
    fsUtils.writeToFile(pkgjson,JSON.stringify({
    "name": "my-app",
    "version": "1.0.0",
    "description": "This is the generated app",
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

var updatePackageJson = function updatePackageJson(modules){
    var newModule;
    var packageJson = path.join(process.cwd(),'package.json');
    var packageJsonContents = require(packageJson);
    var pkgDevDependencies = packageJsonContents["devDependencies"];

    modules.forEach(function(module,index){
      newModule = {
        [module] : "*"
      }
      pkgDevDependencies = Object.assign({},pkgDevDependencies,newModule);
      packageJsonContents["devDependencies"] = pkgDevDependencies;
      fsUtils.writeToFile(packageJson,JSON.stringify(packageJsonContents,0,2));
    });
    
}

module.exports = {
    addDevserver,
    createPkgJson,
    updatePackageJson
}