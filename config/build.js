//生产环境的配置
const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require('terser-webpack-plugin')
// const { optimize } = require('webpack')

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
        //生产打包---抽离css文件
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        }),
        //可视化工具
        new BundleAnalyzerPlugin({}),

    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: resolve('dist/static/css')
                        },
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            //对生产环境图片压缩
            {
                test: /\.(jpg|png|gif|svg)$/i,
                use: [
                    'file-loader',
                    { loader: 'image-webpack-loader', options: {} }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'react': resolve('node_modules/react/cjs/react.production.min.js')
        }
    },
    optimization: {
        // 开启TerserPlugin压缩
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
}
