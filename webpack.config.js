const common = require('./config/common')
const serve = require('./config/serve')
const build = require('./config/build')
const { merge } = require('webpack-merge')

module.exports = env => merge(common, env.development ? serve : build)

