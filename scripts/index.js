const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const exists = fs.existsSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;
//const defaults = require('lodash/defaultsDeep');

//import utility functions
const utils = require('./utils/utils.js');
const styleLints = require('./utils/style-lint.js');
const fsUtils = require('./utils/fs-utils.js');
const cssPreloaders = require('./utils/css-preloaders.js');

//import contents of the different files to write
const pkgjson = path.join(process.cwd(),'package.json');
const webpackPkg = require('./packageJson/webpack.js');
const reactPkg = require('./packageJson/react.js');
const reactReduxPkg = require('./packageJson/react-redux.js');

function init(){
    if(exists(pkgjson)){
      utils.createPkgJson(pkgjson,reactReduxPkg,webpackPkg);
    }
    // const createWebpackDev = path.join(process.cwd(),'webpack.config.js');
    // const createWebpackProd = path.join(process.cwd(),'webpack.config.prod.js');
    // const createGulpfile = path.join(process.cwd(),'gulpfile.js');

    //utils.createFile(createWebpackDev,webpackDev);
     fsUtils.copyDirectory('./scripts/gulp','./');
    // utils.createFile(createGulpfile,gulpFile);
    styleLints.insertStyleLintForGulp('./gulpfile.js')
    //cssPreloaders.preloaderForWebpack('./webpack.config.js','less',/\.less$/);
    // cssPreloaders.preloaderForGulp('./gulpfile.js','less');

    //utils.copyDirectory('./scripts/common-files','./');
     // lints.insertStyleLint('./webpack.config.prod.js');
     // lints.insertEsLint('./webpack.config.prod.js');

    
}

init();

