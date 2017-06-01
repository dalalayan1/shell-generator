const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

//import utility functions
const prompts = require('./utils/prompts.js');
const utils = require('./utils/utils.js');
const esLints = require('./utils/es-lint.js');
const styleLints = require('./utils/style-lint.js');
const fsUtils = require('./utils/fs-utils.js');
const cssPreloaders = require('./utils/css-preloaders.js');

//import contents of the different files to write
const pkgjson = path.join(process.cwd(),'package.json');

 /**
  * Goes through several checks based on params
  * and calls corresponding functions.
  * @param {object} answers to prompts 
  */
function generateProject(params){

  process.stdout.write(chalk.cyan('\nBe patient! We are generating your project...\n'));
  
  //checks for repoUrl to add files from other repo
   if(params.repo){
     doFusion(params.repoUrl);
  }
  
  var frameworkDeps,bundlerDeps;

  //injects bundler deps into package.json
  bundlerDeps = (params.gulp)?require('./packageJson/gulp.js'):require('./packageJson/webpack.js');

  //injects framework deps into package.json
  frameworkDeps = (params.react)?require('./packageJson/react.js'):require('./packageJson/react-redux.js');

  //checks for package bundler
  (params.gulp)?fsUtils.copyDirectory('./scripts/gulp','./'):fsUtils.copyDirectory('./scripts/webpack','./');

  process.stdout.write(chalk.yellow('\ncopying folder-skeleton...'));
  //checks for framework
  (params.react)?fsUtils.copyDirectory('./scripts/skeleton/pure-react','./'):fsUtils.copyDirectory('./scripts/skeleton/react-redux','./');
  process.stdout.write(chalk.green('\ncopied folder-skeleton ✓'));

  //checks and overwrites package.json
  if(fs.existsSync(pkgjson)){
      process.stdout.write(chalk.yellow('\ncreating package.json...'));
      utils.createPkgJson(pkgjson,frameworkDeps,bundlerDeps);
      process.stdout.write(chalk.green('\ncreated package.json ✓'));
    }

  //checks for LESS
  if(params.less){
    process.stdout.write(chalk.yellow('\nconfiguring LESS...'));
    (params.gulp)?cssPreloaders.preloaderForGulp('./gulpfile.js','less'):cssPreloaders.preloaderForWebpack('./webpack-configs/modules.js','less');
    process.stdout.write(chalk.green('\nconfigured LESS ✓'));
  }

  //checks for SASS 
  if(params.sass){
    process.stdout.write(chalk.yellow('\nconfiguring SASS...'));
    (params.gulp)?cssPreloaders.preloaderForGulp('./gulpfile.js','sass'):cssPreloaders.preloaderForWebpack('./webpack-configs/modules.js','sass');
    process.stdout.write(chalk.green('\nconfigured SASS ✓'));
  }

  //checks for eslint
  if(params.eslint){
    process.stdout.write(chalk.yellow('\nconfiguring eslint...'));
    //checks for Airbnb
    if(params.wantAirbnb){
      process.stdout.write(chalk.yellow('\ninjecting Airbnb plugin...'));
      (params.gulp)?esLints.insertEsLintForGulp('./gulpfile.js',true):esLints.insertEsLintForWebpack('./webpack-configs/module.js',true);
      process.stdout.write(chalk.green('\ninjected Airbnb plugin ✓'));
    }
    else {
      (params.gulp)?esLints.insertEsLintForGulp('./gulpfile.js',false):esLints.insertEsLintForWebpack('./webpack-configs/module.js',false);
    }
    process.stdout.write(chalk.green('\nconfigured eslint ✓'));
  }

  //checks for stylelint
  if(params.stylelint){
    process.stdout.write(chalk.yellow('\nconfiguring stylelint...'));
    (params.gulp)?styleLints.insertStyleLintForGulp('./gulpfile.js'):styleLints.insertStyleLintForWebpack(['./webpack.config.js','./webpack.config.prod.js']);
    process.stdout.write(chalk.green('\nconfigured stylelint ✓'));
  }

  //checks for dev-server
  if(params.devserver){
    process.stdout.write(chalk.yellow('\nadding dev-server...'));
    utils.addDevserver();
    process.stdout.write(chalk.green('\nadded dev-server ✓'));
  }
  
}

/**
  * Does git subtree to inject files from extrenal repo.
  * @param {string} repo url
  */
function doFusion(url){
  process.stdout.write(chalk.yellow('\nadding fusion components...\n'));
  execSync(`git subtree add --prefix=src/fusion ${url} master --squash`);
  process.stdout.write(chalk.green('\nadded fusion components to src/fusion ✓'));
}

/**
  * Clears the interval set to myVar
  * which watches for prompts.
  */
function clearme(){
  clearInterval(myVar);
}

/**
  * Checks for presence of yarn/npm 
  * and installs the dependencies.
  */
function installDeps() {
  exec('node --version', function (err, stdout, stderr) {
    const nodeVersion = stdout && parseFloat(stdout.substring(1));
    if (nodeVersion < 5 || err) {
      installDepsCallback(err || 'Unsupported node.js version, make sure you have the latest version installed.');
    } else {
      exec('yarn --version', function (err, stdout, stderr) {
        if (parseFloat(stdout) < 0.15 || err || process.env.USE_YARN === 'false') {
          process.stdout.write('yarn not found, normal npm i');
          process.stdout.write(chalk.yellow('\nnpm installing...'));
          exec('npm install', addCheckMark.bind(null, installDepsCallback));
        } else {
          process.stdout.write(chalk.yellow('\nyarn installing...'));
          exec('yarn install', addCheckMark.bind(null, installDepsCallback));
        }
      });
    }
  });
}

/**
  * Callback function which notifies a user 
  * when the dependencies are installed. 
  * @param {function} callback function to throw error
  */
function addCheckMark(callback) {
  process.stdout.write(chalk.green('\ndependencies installed ✓'));

  doCleanUp();

  if (callback) callback();
}

/**
  * Callback function which gets called on error. 
  * @param {string} error
  */
function installDepsCallback(error) {
  process.stdout.write('\n\n');
  if (error) {
    process.stderr.write(chalk.red(error));
    process.stdout.write('\n');
    process.exit(1);
  } 
}

/**
  * Cleans up for unnecessary files/folders.
  */
function doCleanUp(){
  process.stdout.write(chalk.yellow('\ndoing clean up...'));
  execSync('rimraf scripts');
  process.stdout.write(chalk.green('\nclean up done ✓'));

  process.stdout.write(chalk.cyan('\nVoila! Seems like your project is ready! Happy coding :)'));
}

 /**
  * Entry point when the script is run.
  */
function init(){

  var answers = prompts.getPrompts();
     myVar = setInterval(function(){      
          if(answers.done){
            clearme();
            generateProject(answers);
            installDeps();

            process.stdout.write(chalk.cyan('\nHold on! We are installing the dependencies...'));

          } 
  }, 500);

}


//entry point
init();

