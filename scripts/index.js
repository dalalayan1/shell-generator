const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const exists = fs.existsSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;
//const defaults = require('lodash/defaultsDeep');

//import utility functions
const utils = require('./utils/utils.js');
const esLints = require('./utils/es-lint.js');
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

    //fsUtils.copyDirectory('./scripts/gulp','./');
    //  esLints.insertEsLintForGulp('./gulpfile.js');
    // utils.createFile(createGulpfile,gulpFile);
   // styleLints.insertStyleLintForGulp('./gulpfile.js')
   //cssPreloaders.preloaderForGulp('./gulpfile.js','less');

    fsUtils.copyDirectory('./scripts/skeleton/pure-react','./');
    //fsUtils.copyDirectory('./scripts/devServer','./');
    fsUtils.copyDirectory('./scripts/webpack','./');
    cssPreloaders.preloaderForWebpack('./webpack.config.js','less',/\.less$/);
    esLints.insertEsLintForWebpack('./webpack.config.js');
    styleLints.insertStyleLintForWebpack('./webpack.config.js');


    
}

init();

