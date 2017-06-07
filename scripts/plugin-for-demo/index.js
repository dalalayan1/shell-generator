const chalk = require('chalk');
const execSync = require('child_process').execSync;
const fsUtils = require('../utils/fs-utils.js');

/**
  * Modifies the main.js to add routes for demo app.
  * @param {string} file path
  */
var addRoutes = function addRoutes(file){
    var contents = require('./mainJs-content.js');
    fsUtils.writeToFile(file,contents);    
}

/**
  * Does git subtree to inject files from external repo.
  * @param {string} repo url
  * @param {string} branch name
  * @param {string} folder name
  */
var fetchFromExternalRepo = function fetchFromExternalRepo(url,branch,folder){
  process.stdout.write(chalk.yellow(`\nadding ${folder} components...\n`));
  execSync(`git subtree add --prefix=src/${folder} ${url} ${branch} --squash`);
  process.stdout.write(chalk.green(`\nadded ${folder} components to `)+chalk.magenta(`src/${folder}`)+chalk.green(` ✓`));
}

module.exports = {
    addRoutes,
    fetchFromExternalRepo
}