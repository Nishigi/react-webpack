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
    6- 使用HappyPack开启多线程

如何提升webpack的运行速度（开发环境）
    1- cache-loader构建缓存

*/

