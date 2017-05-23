const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const exists = fs.existsSync;
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;
//const defaults = require('lodash/defaultsDeep');

//import utility functions
const prompts = require('./utils/prompts.js');
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

function initiateGenerator(params){
  console.log('params ',params);

  var frameworkDeps,builderDeps,createSkeleton;

  builderDeps = (params.gulp)?require('./packageJson/gulp.js'):require('./packageJson/webpack.js');

  frameworkDeps = (params.react)?require('./packageJson/react.js'):require('./packageJson/react-redux.js');

  createSkeleton = (params.react)?'./scripts/skeleton/pure-react':'./scripts/skeleton/react-redux';

  if(exists(pkgjson)){
      utils.createPkgJson(pkgjson,frameworkDeps,builderDeps);
    }

    //fsUtils.copyDirectory(createSkeleton,'./');

    //fsUtils.copyDirectory('./scripts/gulp','./');
    //  esLints.insertEsLintForGulp('./gulpfile.js');
    // utils.createFile(createGulpfile,gulpFile);
   // styleLints.insertStyleLintForGulp('./gulpfile.js')
   //cssPreloaders.preloaderForGulp('./gulpfile.js','less');

    // fsUtils.copyDirectory('./scripts/skeleton/pure-react','./');
   
    // fsUtils.copyDirectory('./scripts/webpack','./');
    // cssPreloaders.preloaderForWebpack('./webpack.config.js','less',/\.less$/);
    // esLints.insertEsLintForWebpack('./webpack.config.js');
    // styleLints.insertStyleLintForWebpack('./webpack.config.js');
}

function clearme(){
  clearInterval(myVar);
}

function init(){
  var answers = prompts.getPrompts();
     myVar = setInterval(function(){      
          if(answers.done){
            clearme();
            //console.log('prompts ',answers);
            initiateGenerator(answers);
          } 
  }, 500);

    
}

init();

