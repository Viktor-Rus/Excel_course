module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        babelOptions: {
            configFile: "./babel.config.js"
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ["eslint:recommended", "google"]
};