const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');

var insertEsLintForGulp = function insertEsLintForGulp(file){

    var contents,insertTask,appendToDefault,finalGulp;

    contents = fsUtils.readTheFile(file).split('gulp.task("default",[');

    insertTask = 
    `var gulpEslint = require('gulp-eslint');
    
    gulp.task('es-lint', function () {
        return gulp.src('src/**/*.js') 
                .pipe(gulpEslint())
                .pipe(gulpEslint.format())
                .pipe(gulpEslint.failAfterError());
            });\n\n` + contents[0];
    
    appendToDefault = '"es-lint",' + contents[1];

    finalGulp = insertTask + 'gulp.task("default",[' + appendToDefault;

    fsUtils.writeToFile(file,finalGulp);

    fsUtils.copyDirectory('./scripts/es-linting','./');

    utils.updatePackageJson(["gulp-eslint"]);
}

var insertEsLintForWebpack = function insertEsLintForWebpack(files) {

    files.forEach(function(file,index){

        var contents,requires,configs,plugins,insertPlugins,finalWebpack;

        contents = fsUtils.readTheFile(file).split('module: {');
        beforeModule = contents[0];
        insertRule = contents[1];
        insertRule = 
        `rules: [
                    {
                        enforce: "pre",
                        test:  /.js$/,
                        exclude: [/node_modules/,/\.scss$/,/\.less$/],
                        loader: "jsxhint-loader"
                    },
                    {
                        enforce: "pre",
                        test: /\.js$/,
                        exclude: [/node_modules/,/\.scss$/,/\.less$/],
                        loader: "eslint-loader"
                    }
                ],` + insertRule;
        
        finalWebpack = beforeModule + 'module: {\n\t\t' +insertRule;
        
        fsUtils.writeToFile(file,finalWebpack);
    });

    fsUtils.copyDirectory('./scripts/es-linting','./');

    utils.updatePackageJson(["jsxhint-loader","jshint","eslint-loader","eslint"]);

}

module.exports = {
    insertEsLintForGulp,
    insertEsLintForWebpack
}