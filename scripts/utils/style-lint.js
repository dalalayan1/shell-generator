const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');

var insertStyleLintForGulp = function insertStyleLintForGulp(file){

    var contents,insertTask,appendToDefault,finalGulp;

    contents = fsUtils.readTheFile(file).split('gulp.task("default",[');

    insertTask = 
    `var gulpStylelint = require('gulp-stylelint');

    gulp.task('css-lint', function () {
        return gulp.src('dist/css/*.css')
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

    utils.updatePackageJson("gulp-stylelint");
}

var insertStyleLintForWebpack = function insertStyleLintForWebpack(file) {

    var contents,requires,configs,plugins,insertPlugins,finalWebpack;

    contents = fsUtils.readTheFile(file,'utf8').split('module.exports = ');
    requires = contents[0];
    requires = requires + 'var StyleLintPlugin = require("stylelint-webpack-plugin");\n\n';
    configs = contents[1];
    plugins = configs.split('plugins: [');
    insertPlugins = plugins[1];
    insertPlugins = `
            new StyleLintPlugin({
                configFile: './.stylelintrc',
                failOnError: false
            }),\n\t` + insertPlugins;
    
    finalWebpack = requires + 'module.exports = ' + plugins[0] + 'plugins: [' + insertPlugins;
    
    fsUtils.writeToFile(file,finalWebpack);

    utils.updatePackageJson("stylelint-webpack-plugin");

    fsUtils.copyDirectory('./scripts/style-linting','./');
}



module.exports = {
    insertStyleLintForGulp,
    insertStyleLintForWebpack
}