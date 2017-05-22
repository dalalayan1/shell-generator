const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');

var preloaderForGulp = function preloaderForGulp(file,option){

    var contents,insertPreloader,appendToDefault,finalWebpack;

    contents = fsUtils.readTheFile(file).split('gulp.task("default",[');

    insertPreloader = 'var '+option+' = require(\'gulp-'+option+'\');\n gulp.task('+option+', function () {\n\tgulp.src(\'./src/styles/*.'+option+'\')\n\t\t.pipe('+option+'())\n\t\t.pipe(gulp.dest(\'dist/css\'));\n\t});\n' + contents[0];

    appendToDefault = '"' + option + '",' + contents[1];

    finalWebpack = insertPreloader + '\ngulp.task("default",[' + appendToDefault;

    fsUtils.writeToFile(file,finalWebpack);

    utils.updatePackageJson("gulp-"+option);
}

var preloaderForWebpack = function preloaderForWebpack(file,option,regex){

    var contents,insertPreloader,finalWebpack;

    contents = fsUtils.readTheFile(file).split('loaders: [');

    insertPreloader = '\t\t{\n\t\t\ttest: '+regex+',\n\t\t\tloader: \'style-loader!css-loader!'+option+'-loader\'\n\t\t},'+contents[1];

    finalWebpack = contents[0] + 'loaders: [\n' +insertPreloader;

    fsUtils.writeToFile(file,finalWebpack);

    utils.updatePackageJson(option+"-loader");
}

module.exports = {
    preloaderForGulp,
    preloaderForWebpack
}