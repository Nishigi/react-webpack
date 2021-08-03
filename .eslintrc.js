module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],

    plugins: ["react", "react-hooks"],

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
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
}