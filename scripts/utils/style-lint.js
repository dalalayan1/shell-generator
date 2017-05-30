const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');

/**
   * Configures stylelint for gulp.
   * @param {string} file path 
   */
var insertStyleLintForGulp = function insertStyleLintForGulp(file){

    var contents,insertTask,appendToDefault,finalGulp;

    contents = fsUtils.readTheFile(file).split('gulp.task("default",[');

    insertTask = 
    `var gulp = require('gulp');
    var gulpStylelint = require('gulp-stylelint');

    gulp.task('css-lint', function () {
        return gulp.src(['src/styles/*.less','src/styles/*.scss'])
                .pipe(gulpStylelint({
                        failAfterError: false,
                        reporters: [{
                            formatter: 'string', 
                            console: true
                        }
                    ]}))
                });\n\n` + contents[0];
    
    appendToDefault = '"css-lint",' + contents[1];

    finalGulp = insertTask + 'gulp.task("default",[' + appendToDefault;

    fsUtils.writeToFile(file,finalGulp);

    fsUtils.copyDirectory('./scripts/style-linting','./');

    utils.updatePackageJson(["gulp-stylelint"]);
}

/**
   * Configures stylelint for webpack.
   * @param {array} file paths 
   */
var insertStyleLintForWebpack = function insertStyleLintForWebpack(files) {

    files.forEach(function(file,index){

        var contents,insertStylelintPlugin,finalWebpack;

        contents = fsUtils.readTheFile(file).split('plugins: [');

        insertStylelintPlugin = 
        `plugins.StylelintWebpackPlugin,` + contents[1];

        finalWebpack = contents[0] + 'plugins: [' + insertStylelintPlugin;
        
        fsUtils.writeToFile(file,finalWebpack);
    });

    fsUtils.copyDirectory('./scripts/style-linting','./');

    utils.updatePackageJson(["stylelint-webpack-plugin"]);
}



module.exports = {
    insertStyleLintForGulp,
    insertStyleLintForWebpack
}