module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],

    plugins: ["react"],

    // 检测指定项
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },

    env: {
        es6: true,
        browser: true,
        node: false
    },
    rules: {
        "semi": "off",
        'react/prop-types': 'off'
    }
}