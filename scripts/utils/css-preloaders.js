const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');

var preloaderForGulp = function preloaderForGulp(file,option){

    var contents,insertPreloader,appendToDefault,finalWebpack;

    contents = fsUtils.readTheFile(file).split('gulp.task("default",[');

    insertPreloader = 
    `var gulp = require('gulp');
    var `+option+` = require('gulp-`+option+`');
    
    gulp.task('`+option+`', function () {
        gulp.src('./src/styles/*.`+option+`')
            .pipe(`+option+`())
            .pipe(gulp.dest('dist/css'));
        });\n\n` + contents[0];

    appendToDefault = '"' + option + '",' + contents[1];

    finalWebpack = insertPreloader + '\ngulp.task("default",[' + appendToDefault;

    fsUtils.copyDirectory('./scripts/styles/'+option,'./src');

    fsUtils.writeToFile(file,finalWebpack);

    utils.updatePackageJson(["gulp-"+option]);
}

var preloaderForWebpack = function preloaderForWebpack(file,option){

        var contents,requirePreloader,insertPreloader,finalLoader;

        contents = fsUtils.readTheFile(file).split('module.exports = [');

        requirePreloader = 
        `var cssPreLoader = require('./`+option+`-loader.js');\n` + contents[0];

        insertPreloader = 
            `cssPreLoader,`+contents[1];

        finalLoader = requirePreloader + 'module.exports = [' + insertPreloader;

        fsUtils.writeToFile(file,finalLoader);

        fsUtils.copyDirectory('./scripts/styles/'+option,'./src');

    if(option=="sass"){
        utils.updatePackageJson([option+"-loader",option,"node-"+option]);
    }
    else{
        utils.updatePackageJson([option+"-loader",option]);
    }
}

module.exports = {
    preloaderForGulp,
    preloaderForWebpack
}