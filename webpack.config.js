var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
require('dotenv').config({ path: './.env' });

module.exports = {
    mode: 'development',
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(less|css)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|mp4|ico|svg)$/i,
                /* Exclude fonts while working with images, e.g. .svg can be both image or font. */
                exclude: path.resolve(__dirname, '../src/_assets/fonts'),
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                /* Exclude images while working with fonts, e.g. .svg can be both image or font. */
                exclude: path.resolve(__dirname, '../src/assets/images'),
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    },
                }]
            }
        ]
    },
    resolve: {
        mainFiles: ['index', 'Index'],
        extensions: ['.mjs', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({

            //apiUrl: 'http://localhost:4000',
            //graphqlUrlHttp:'http://localhost:5000/graphql',
            //graphqlUrlWs:'ws://localhost:5000/graphql',

            awsBucketKey: '8lSTaH/oNh7T/uojcngx2RLxN/fHy4DD/lfmleq9',
            awsAccessKey: 'AKIARVPMJKFUWHUZ2KA5',
            awsRegion: 'ap-southeast-1',
            apiUrl: 'https://dmapi.walztech.com:4000',
            graphqlUrlHttp: 'http://dmapi.walztech.com:5000/graphql',
            graphqlUrlWs: 'ws://dmapi.walztech.com:5000/graphql',
        })
    }
}