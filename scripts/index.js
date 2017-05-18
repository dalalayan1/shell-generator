const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const exists = fs.existsSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;
//const defaults = require('lodash/defaultsDeep');

//import utility functions
const utils = require('./utils');

//import contents of the different files to write
const pkgjson = path.join(process.cwd(),'package.json');
const webpackPkg = require('./packageJson/webpack.js');
const reactPkg = require('./packageJson/react.js');
const reactReduxPkg = require('./packageJson/react-redux.js');
const gulpFile = readFile(path.join(process.cwd(),'./scripts/gulp/gulp-file.js'),'utf8');
const webpackDev = readFile(path.join(process.cwd(),'./scripts/webpack/webpack-dev.js'),'utf8');
const webpackProd = readFile(path.join(process.cwd(),'./scripts/webpack/webpack-prod.js'),'utf8');

function init(){
    //if(exists(pkgjson)){
    //   utils.createPkgJson(pkgjson,reactReduxPkg);
    // }
    // const createWebpackDev = path.join(process.cwd(),'webpack.config.js');
     const createWebpackProd = path.join(process.cwd(),'webpack.config.prod.js');
    // const createGulpfile = path.join(process.cwd(),'gulpfile.js');

    //utils.createFile(createWebpackDev,webpackDev);
     utils.createFile(createWebpackProd,webpackProd);
    // utils.createFile(createGulpfile,gulpFile);

    //utils.copyDirectory('./scripts/common-files','./');
      utils.insertStyleLint(createWebpackProd,'utf8');
    
    
}

init();

