const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const exists = fs.existsSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;
//const defaults = require('lodash/defaultsDeep');

//import utility functions
const utils = require('./utils/utils.js');
const lints = require('./utils/lint.js');
const fsUtils = require('./utils/fs-utils.js');

//import contents of the different files to write
const pkgjson = path.join(process.cwd(),'package.json');
const webpackPkg = require('./packageJson/webpack.js');
const reactPkg = require('./packageJson/react.js');
const reactReduxPkg = require('./packageJson/react-redux.js');
const gulpFile = readFile(path.join(process.cwd(),'./scripts/gulp/gulp-file.js'),'utf8');
const webpackDev = readFile(path.join(process.cwd(),'./scripts/webpack/webpack-dev.js'),'utf8');
const webpackProd = readFile(path.join(process.cwd(),'./scripts/webpack/webpack-prod.js'),'utf8');

function init(){
    if(exists(pkgjson)){
      utils.createPkgJson(pkgjson,reactReduxPkg,webpackPkg);
    }
    // const createWebpackDev = path.join(process.cwd(),'webpack.config.js');
     const createWebpackProd = path.join(process.cwd(),'webpack.config.prod.js');
    // const createGulpfile = path.join(process.cwd(),'gulpfile.js');

    //utils.createFile(createWebpackDev,webpackDev);
     fsUtils.createFile(createWebpackProd,webpackDev);
    // utils.createFile(createGulpfile,gulpFile);

    //utils.copyDirectory('./scripts/common-files','./');
      lints.insertStyleLint(createWebpackProd);
      lints.insertEsLint(createWebpackProd);

    // const pack = path.join(process.cwd(),'package.json');
    // var wholepk = require(pack);
    // var pk = require(pack)["devDependencies"];
    // var pk1 = Object.assign({},pk,{"stylelint-webpack-plugin":"*"});
    // pk = pk1;
    // wholepk["devDependencies"] = pk;
    // writeFile(pack,JSON.stringify(wholepk,0,2));

    //console.log('pkg ',wholepk);
    
}

init();

