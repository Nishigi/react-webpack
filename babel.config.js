module.exports = function (api) {
    api.cache(true)
    return {
        //babel预设:用于编译js语法版本(ES6、TS、JSX)
        presets: [
            ['@babel/preset-env', {}],
            ['@babel/preset-react', {}]
        ],
        //babel插件:用于弥补预设中的漏洞和不足
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }]
        ],
    }
}