var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
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
        extensions: ['.mjs','.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
			apiUrl: 'http://54.179.136.234:4000'
            //apiUrl: 'http://localhost:4000'
        })
    }
}