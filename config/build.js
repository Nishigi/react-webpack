//生产环境的配置
const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    cache: false,
    output: {
        // 打包后前缀路径
        publicPath: './static/',
    },
    plugins: [//插件
        //打包静态文件
        new HtmlWebpackPlugin({
            template: resolve('public/index.html'),
            filename: resolve('dist/index.html'),
            minify: true,
            inject: 'body',
            title: 'React',
            scriptLoading: 'blocking',
            favicon: resolve('public/favicon.ico')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        alias: {
            'react': resolve('node_modules/react/cjs/react.production.min.js')
        }
    }
}
