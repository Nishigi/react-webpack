const common = require('./config/common')
const serve = require('./config/serve')
const build = require('./config/build')
const { merge } = require('webpack-merge')

module.exports = env => merge(common, env.development ? serve : build)

/*

如何做webpack构建优化（打包优化）
    1- devtool：'source-map'
    2- mode：'production'
    3- vendor提取第三方公共包
    4- 配置loaders时，使用exclude或include指定目录
    5- resolv 路径解析优化（alias、extensions、modules）
    6- 使用HappyPack开启多线程构建
    7- MiniCssExtractPlugin抽离CSS
    8- 使用压缩效率更高的TerserwebpackPlugin插件进行生产压缩
    9- 使用Tree-Shaking把自定义模块中从未使用刀的变量或方法移除

如何提升webpack的运行速度（开发环境）
    1- cache-loader缓存资源
    2- optimization.minimize 关闭压缩功能
    3- SpeedMeasurePlugin对所有插件进行加速
    4-
*/

