var webpack = require('webpack')

var HtmlWebpackPluginConfig = new (require('html-webpack-plugin'))({
    template : './src/index.html',
    filename : 'index.html',
    inject : 'body'
})
var StylelintWebpackPlugin = new (require('stylelint-webpack-plugin'))({
                    configFile: './.stylelintrc',
                    files: ['**/*.scss','**/*.less'],
                    failOnError: false
                })
var HMRPlugin = new webpack.HotModuleReplacementPlugin();
var ModuleConcatenationPlugin = new webpack.optimize.ModuleConcatenationPlugin();
module.exports = {
    HtmlWebpackPluginConfig,
    StylelintWebpackPlugin,
    HMRPlugin,
    ModuleConcatenationPlugin
}