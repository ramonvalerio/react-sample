const webpack = require('webpack')

module.exports = {
    entry: './src/app.jsx',
    output: {
        path:__dirname + '/public',
        filename: './app.bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve:{
        extensions: ['.js','.jsx']
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use:[
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }
                ]
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
};