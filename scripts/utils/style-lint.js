const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');

var insertStyleLintForGulp = function insertStyleLintForGulp(file){

    var contents,insertTask,appendToDefault,finalGulp;

    contents = fsUtils.readTheFile(file).split('gulp.task("default",[');

    insertTask = 'var gulpStylelint = require(\'gulp-stylelint\');\n gulp.task(\'css-lint\', function () {\n\treturn gulp.src(\'dist/css/*.css\')\n\t\t.pipe(gulpStylelint({\n\t\t\tfailAfterError: false,\n\t\t\treporters: [\n\t\t\t{formatter: \'string\', console: true}\n\t\t]}))\n\t});\n' + contents[0];
    
    appendToDefault = '"css-lint",' + contents[1];

    finalGulp = insertTask + '\ngulp.task("default",[' + appendToDefault;

    fsUtils.writeToFile(file,finalGulp);

     fsUtils.copyDirectory('./scripts/style-linting','./');

    utils.updatePackageJson("gulp-stylelint");
}

var insertStyleLintForWebpack = function insertStyleLintForWebpack(file) {

    var contents,requires,configs,plugins,insertPlugins,finalWebpack;

    contents = fsUtils.readTheFile(file,'utf8').split('module.exports = ');
    requires = contents[0];
    requires = requires + 'var StyleLintPlugin = require("stylelint-webpack-plugin");\n';
    configs = contents[1];
    plugins = configs.split('plugins: [');
    insertPlugins = plugins[1];
    insertPlugins = '\n\t\tnew StyleLintPlugin({\n\t\tconfigFile: \'./.stylelintrc\',\n\t\tfailOnError: false\n\t}),\n' + insertPlugins;
    
    finalWebpack = requires + '\nmodule.exports = ' + plugins[0] + '\n\tplugins: [' + insertPlugins;
    
    fsUtils.writeToFile(file,finalWebpack);

    utils.updatePackageJson("stylelint-webpack-plugin");

    fsUtils.copyDirectory('./scripts/style-linting','./');
}



module.exports = {
    insertStyleLintForGulp,
    insertStyleLintForWebpack
}