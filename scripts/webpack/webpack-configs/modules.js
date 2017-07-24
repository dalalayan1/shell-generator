var loaders = require('./loaders');
module.exports = {
    loaders: [loaders.sassLoader,loaders.babelLoader,loaders.jsonLoader,loaders.urlLoader]
}
