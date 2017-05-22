const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');

var insertEsLintForGulp = function insertEsLintForGulp(file){

    var contents,insertTask,appendToDefault,finalGulp;

    contents = fsUtils.readTheFile(file).split('gulp.task("default",[');

    insertTask = 'var gulpEslint = require(\'gulp-eslint\');\n gulp.task(\'es-lint\', function () {\n\treturn gulp.src(\'dist/js/*.js\')\n\t\t.pipe(gulpEslint())\n\t\t.pipe(gulpEslint.format())\n\t\t.pipe(gulpEslint.failAfterError());\n\t});\n' + contents[0];
    
    appendToDefault = '"es-lint",' + contents[1];

    finalGulp = insertTask + '\ngulp.task("default",[' + appendToDefault;

    fsUtils.writeToFile(file,finalGulp);

    fsUtils.copyDirectory('./scripts/es-linting','./');

    utils.updatePackageJson("gulp-eslint");
}

var insertEsLintForWebpack = function insertEsLintForWebpack(file) {

    var contents,requires,configs,plugins,insertPlugins,finalWebpack;

    contents = fsUtils.readTheFile(file).split('module: {');
    beforeModule = contents[0];
    insertRule = contents[1];
    insertRule = '\n\t\trules: [\n\t\t{\n\t\t\tenforce: "pre",\n\t\t\ttest: /\.js$/,\n\t\t\texclude: /node_modules/,\n\t\t\tloader: "eslint-loader"\n\t\t}\n\t\t],' + insertRule;
    
    finalWebpack = beforeModule + '\tmodule: {' +insertRule;
    
    fsUtils.writeToFile(file,finalWebpack);

    utils.updatePackageJson("eslint-loader");

}

module.exports = {
    insertEsLintForGulp,
    insertEsLintForWebpack
}