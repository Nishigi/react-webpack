//开发环境和生产环境都相同的配置
const { resolve } = require('./utils')
const webpack = require('webpack')
module.exports = {//15：25
    // entry: {//入口
    //     path: resolve('./src/main.js'),
    // },
    entry: {
        // 理解：把多个chunk中公共的包（往往是第三方包）抽离出来，缩减业务的体积.
        vendor: ['react', 'react-dom'],
        app: {
            import: resolve('./src/main.js'),
            dependOn: ['vendor', 'jq']
        }
    },
    output: {//出口
        //指定打包后文件存放位置,只能是绝对路径           
        path: resolve('dist/static'),
        // 打包后前缀路径
        // publicPath: './static/',
        //[name].[chunkhash].js 第一个参数为打包后的文件名不填写默认为entry键名
        //第二个参数为打包后文件名后的hash值，只有与当前chunk相关的文件代码发生变化时，才会再次打包hash值才改变
        filename: 'build.[chunkhash].js',
        //每次打包清除上次打包文件
        clean: true
    },
    plugins: [
        new webpack.ProgressPlugin({})
    ],
    module: {
        rules: [
            // v4写法需要file-loader依赖
            // { test: /\.(jpg|png|gif|svg|ico)$/, use: 'file-loader' },
            // v5写法无需安装依赖
            {
                test: /\.(jpg|png|gif|svg|ico)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(scss|sass|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(js|jsx|ts|tsx)$/i,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
        ]
    }
}