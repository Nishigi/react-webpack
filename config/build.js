//生产环境的配置
const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
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
            scriptLoading: 'blocking'
        }),
    ],
}