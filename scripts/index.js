const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const exists = fs.existsSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;
const defaults = require('lodash/defaultsDeep');

//get contents of the different files to write
const pkgjson = path.join(process.cwd(),'package.json');
const webpackPkg = require('./packageJson/webpack.js');
const reactPkg = require('./packageJson/react.js');
const reactReduxPkg = require('./packageJson/react-redux.js');
const gulpFile = readFile(path.join(process.cwd(),'./scripts/gulp/gulp-file.js'),'utf8');
const webpackDev = readFile(path.join(process.cwd(),'./scripts/webpack/webpack-dev.js'),'utf8');
const webpackProd = readFile(path.join(process.cwd(),'./scripts/webpack/webpack-prod.js'),'utf8');

function createPkgJson(pkgFile){
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

function createWebpack(file,contents){
  writeFile(file,contents,'utf8');
}

function init(){
     if(exists(pkgjson)){
      createPkgJson(reactReduxPkg);
    }
    const createWebpackDev = path.join(process.cwd(),'webpack.config.js');
    const createWebpackProd = path.join(process.cwd(),'webpack.config.prod.js');
    const createGulpfile = path.join(process.cwd(),'gulpfile.js');

    createWebpack(createWebpackDev,webpackDev);
    createWebpack(createWebpackProd,webpackProd);
    createWebpack(createGulpfile,gulpFile);
    
}

init();

