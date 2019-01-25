module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "off"
        ],
        "semi": [
            2,
            "always"
        ],
        "no-console": [
            "off"
        ]
    },
    "globals": {
        "window": true,
        "element": true,
        "by": true,
        "browser": true,
        "protractor": true,
        "it": true,
        "describe": true,
        "expect": true
    }
};