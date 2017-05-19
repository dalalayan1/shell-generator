const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');

var insertEsLint = function insertEsLint(file) {

    var contents,requires,configs,plugins,insertPlugins,finalWebpack;

    contents = fsUtils.readTheFile(file).split('module: {');
    beforeModule = contents[0];
    insertRule = contents[1];
    insertRule = '\n\t\trules: [\n\t\t{\n\t\t\tenforce: "pre",\n\t\t\ttest: /\.js$/,\n\t\t\texclude: /node_modules/,\n\t\t\tloader: "eslint-loader"\n\t\t}\n\t\t],' + insertRule;
    
    finalWebpack = beforeModule + '\tmodule: {' +insertRule;
    
    fsUtils.writeToFile(file,finalWebpack);

    utils.updatePackageJson("eslint-loader");

}

var insertStyleLint = function insertStyleLint(file) {

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
    insertEsLint,
    insertStyleLint
}