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

var preloaderForWebpack = function preloaderForWebpack(files,option,regex){

    files.forEach(function(file,index){

        var contents,insertPreloader,finalWebpack;

        contents = fsUtils.readTheFile(file).split('loaders: [');

        insertPreloader = 
            `{
                test: `+regex+`,
                loader: 'style-loader!css-loader!`+option+`-loader'
             },`+contents[1];

        finalWebpack = contents[0] + 'loaders: [\n\t\t\t' +insertPreloader;

        fsUtils.copyDirectory('./scripts/styles/'+option,'./src');

        fsUtils.writeToFile(file,finalWebpack);
    });

    if(option=="sass"){
        utils.updatePackageJson([option+"-loader",option,"node-"+sass]);
    }
    else{
        utils.updatePackageJson([option+"-loader",option]);
    }
}

module.exports = {
    preloaderForGulp,
    preloaderForWebpack
}