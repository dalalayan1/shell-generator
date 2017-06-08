const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');
const path = require('path');

/**
   * Creates .eslintrc file.
   */
var createEslintFile = function createEslintFile(){

    var contents = require('../es-linting/eslintrc.js');

    fsUtils.createFile('./.eslintrc',JSON.stringify(contents,null,2));
}

/**
   * Configures Airbnb plugin for eslint.
   */
var injectAirbnb = function injectAirbnb(){
  
    var eslintFile = path.join(process.cwd(),'.eslintrc');
    var eslintFileContents = JSON.parse(fsUtils.readTheFile(eslintFile),'utf8');

    eslintFileContents = Object.assign({},eslintFileContents,{"extends": "airbnb"});

    fsUtils.writeToFile(eslintFile,JSON.stringify(eslintFileContents,null,2));
   
    utils.updatePackageJson(["eslint-config-airbnb","eslint-plugin-jsx-a11y","eslint-plugin-react","eslint-plugin-import"]);
}

/**
   * Configures eslint for gulp.
   * @param {string} file path
   * @param {boolean} 
   */
var insertEsLintForGulp = function insertEsLintForGulp(file,wantAirbnb){

    var contents,insertTask,appendToDefault,finalGulp;

    contents = fsUtils.readTheFile(file).split('gulp.task("default",[');

    insertTask = 
    `var gulp = require('gulp');
    var gulpEslint = require('gulp-eslint');
    
    gulp.task('es-lint', function () {
        return gulp.src('src/**/*.js') 
                .pipe(gulpEslint())
                .pipe(gulpEslint.format())
                .pipe(gulpEslint.failAfterError());
            });\n\n` + contents[0];
    
    appendToDefault = '"es-lint",' + contents[1];

    finalGulp = insertTask + 'gulp.task("default",[' + appendToDefault;

    fsUtils.writeToFile(file,finalGulp);

     
    createEslintFile();

    if(wantAirbnb){
        injectAirbnb();
     } 

    utils.updatePackageJson(["gulp-eslint"]);
}


/**
   * Configures eslint for webpack.
   * @param {string} file path
   * @param {boolean} 
   */
var insertEsLintForWebpack = function insertEsLintForWebpack(file,wantAirbnb) {

 

        var contents,beforeModule,insertRules,finalModule;

        contents = fsUtils.readTheFile(file).split('module.exports = {');

        beforeModule = 
        `var rules = require('./rules-eslint.js')||[];\n` + contents[0];
        
        insertRules = 
        `rules:rules,` + contents[1];
        
        finalModule = beforeModule + 'module.exports = {\n\t\t' +insertRules;
        
        fsUtils.writeToFile(file,finalModule);
  

    createEslintFile();

     if(wantAirbnb){
        injectAirbnb();
    }

    utils.updatePackageJson(["jsxhint-loader","jshint","eslint-loader","eslint"]);

}

module.exports = {
    insertEsLintForGulp,
    insertEsLintForWebpack
}
