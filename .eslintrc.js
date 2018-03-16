module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": false,
				"jquery" :true,
				"animate": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [2,2],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [0]
    }
};