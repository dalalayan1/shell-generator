var webpack = require('webpack');

//to extract html file for build and inject script tag
var HtmlWebpackPluginConfig = new (require('html-webpack-plugin'))({
                                template : './src/index.html',
                                filename : 'index.html',
                                inject : 'body'
                            });

//plugin for stylelint
var StylelintWebpackPlugin = new (require('stylelint-webpack-plugin'))({
                                configFile: './.stylelintrc',
                                files: ['**/*.scss','**/*.less'],
                                failOnError: false
                            });

//webpack plugin for hot module reloading                            
var HMRPlugin = new webpack.HotModuleReplacementPlugin();

//webpack3 plugin for scope hoisting
var ModuleConcatenationPlugin = new webpack.optimize.ModuleConcatenationPlugin();


module.exports = {
    HtmlWebpackPluginConfig,
    HMRPlugin,
    ModuleConcatenationPlugin,
    StylelintWebpackPlugin
}