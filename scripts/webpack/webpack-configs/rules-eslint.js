module.exports = [
                    {
                        enforce: "pre",
                        test:  /.js$/,
                        exclude: [/node_modules/,/.scss$/,/.less$/],
                        loader: "jsxhint-loader"
                    },
                    {
                        enforce: "pre",
                        test: /.js$/,
                        exclude: [/node_modules/,/.scss$/,/.less$/],
                        loader: "eslint-loader"
                    }
                ]