const fsUtils = require('./fs-utils.js');
const utils = require('./utils.js');

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
    insertEsLintForWebpack
}