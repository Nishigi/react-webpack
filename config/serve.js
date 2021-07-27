//开发环境的配置
const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
module.exports = {
    mode: 'development',
    // 当src源码报错时，在浏览器控制台中打印的代码行号是源码位置，而不是编译后的代码位置。
    devtool: 'inline-source-map',
    plugins: [//插件
        //打包静态文件
        new HtmlWebpackPlugin({
            template: resolve('public/index.html'),
            title: 'React',
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx'],
            exclude: 'node_modules',
            threads: false
        })
    ],
    devServer: {//服务
        port: 8000,
        open: true,
        contentBase: resolve('public'),
        hot: true,//热更新
        overlay: true
    }
}