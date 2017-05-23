const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');

var insertStyleLintForGulp = function insertStyleLintForGulp(file){

    var contents,insertTask,appendToDefault,finalGulp;

    contents = fsUtils.readTheFile(file).split('gulp.task("default",[');

    insertTask = 
    `var gulpStylelint = require('gulp-stylelint');

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

var insertStyleLintForWebpack = function insertStyleLintForWebpack(file) {

    var contents,requires,configs,plugins,insertPlugins,finalWebpack;

    contents = fsUtils.readTheFile(file,'utf8').split('module.exports = ');
    requires = contents[0];
    requires = requires + 'var StylelintWebpackPlugin = require(\'stylelint-webpack-plugin\');\n\n';
    configs = contents[1];
    plugins = configs.split('plugins: [');
    insertPlugins = plugins[1];
    insertPlugins = `
            new StylelintWebpackPlugin({
                configFile: './.stylelintrc',
                files: ['**/*.scss','**/*.less'],
                failOnError: false
            }),\n\t` + insertPlugins;
    
    finalWebpack = requires + 'module.exports = ' + plugins[0] + 'plugins: [' + insertPlugins;
    
    fsUtils.writeToFile(file,finalWebpack);

    fsUtils.copyDirectory('./scripts/style-linting','./');

    utils.updatePackageJson(["stylelint-webpack-plugin","stylelint"]);
}



module.exports = {
    insertStyleLintForGulp,
    insertStyleLintForWebpack
}