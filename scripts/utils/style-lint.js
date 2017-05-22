const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');

var insertStyleLintForGulp = function insertStyleLintForGulp(file){

    var contents,insertPreloader,appendToDefault,finalWebpack;

    contents = fsUtils.readTheFile(file).split('gulp.task("default",[');

    insertPreloader = 'var gulpStylelint = require(\'gulp-stylelint\');\n gulp.task(\'lint-css\', function () {\n\treturn gulp.src(\'dist/css/*.css\')\n\t\t.pipe(gulpStylelint({\n\t\t\tfailAfterError: false,\n\t\t\treporters: [\n\t\t\t{formatter: \'string\', console: true}\n\t\t]}))\n\t});\n' + contents[0];
    appendToDefault = '"lint-css",' + contents[1];

    finalWebpack = insertPreloader + '\ngulp.task("default",[' + appendToDefault;

    fsUtils.writeToFile(file,finalWebpack);

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