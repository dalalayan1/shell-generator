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

function generateProject(params){
  
  var frameworkDeps,bundlerDeps;

  bundlerDeps = (params.gulp)?require('./packageJson/gulp.js'):require('./packageJson/webpack.js');

  frameworkDeps = (params.react)?require('./packageJson/react.js'):require('./packageJson/react-redux.js');

  (params.gulp)?fsUtils.copyDirectory('./scripts/gulp','./'):fsUtils.copyDirectory('./scripts/webpack','./');

  (params.react)?fsUtils.copyDirectory('./scripts/skeleton/pure-react','./'):fsUtils.copyDirectory('./scripts/skeleton/react-redux','./');

  if(exists(pkgjson)){
      utils.createPkgJson(pkgjson,frameworkDeps,bundlerDeps);
    }

  if(params.less){
    (params.gulp)?cssPreloaders.preloaderForGulp('./gulpfile.js','less'):cssPreloaders.preloaderForWebpack('./webpack-configs/modules.js','less');
  }

  if(params.sass){
    (params.gulp)?cssPreloaders.preloaderForGulp('./gulpfile.js','sass'):cssPreloaders.preloaderForWebpack('./webpack-configs/modules.js','sass');
  }

  if(params.eslint){
    
    if(params.wantAirbnb){
      (params.gulp)?esLints.insertEsLintForGulp('./gulpfile.js',true):esLints.insertEsLintForWebpack('./webpack-configs/module.js',true);
    }
    else {
      (params.gulp)?esLints.insertEsLintForGulp('./gulpfile.js',false):esLints.insertEsLintForWebpack('./webpack-configs/module.js',false);
    }
  }

  if(params.stylelint){
    (params.gulp)?styleLints.insertStyleLintForGulp('./gulpfile.js'):styleLints.insertStyleLintForWebpack(['./webpack.config.js','./webpack.config.prod.js']);
  }

  if(params.devserver){
    utils.addDevserver();
  }
  
}

function clearme(){
  clearInterval(myVar);
}

function init(){

  var answers = prompts.getPrompts();
     myVar = setInterval(function(){      
          if(answers.done){
            clearme();
            generateProject(answers);
            installDeps();
          } 
  }, 500);

}
function installDeps() {
  exec('node --version', function (err, stdout, stderr) {
    const nodeVersion = stdout && parseFloat(stdout.substring(1));
    if (nodeVersion < 5 || err) {
      installDepsCallback(err || 'Unsupported node.js version, make sure you have the latest version installed.');
    } else {
      exec('yarn --version', function (err, stdout, stderr) {
        if (parseFloat(stdout) < 0.15 || err || process.env.USE_YARN === 'false') {
          process.stdout.write('yarn not found, normal npm i');
          exec('npm install', addCheckMark.bind(null, installDepsCallback));
        } else {
          process.stdout.write('yarn installing');
          exec('yarn install', addCheckMark.bind(null, installDepsCallback));
        }
      });
    }
  });
}
function addCheckMark(callback) {
  process.stdout.write(' ✓');
  if (callback) callback();
}
function installDepsCallback(error) {
  process.stdout.write('\n\n');
  if (error) {
    process.stderr.write(error);
    process.stdout.write('\n');
    process.exit(1);
  }

  
}
init();

