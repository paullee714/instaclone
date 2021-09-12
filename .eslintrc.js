module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: [
        "react",
    ],
    rules: {
        "no-tabs": 0,
        "global-require": 0,
        "no-use-before-define": 0,
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/style-prop-object": 0,
        "react/jsx-indent-props": 0,
        "require-jsdoc": 0,
        "react/prop-types": 0,
        indent: ["error", 4, { ignoredNodes: ["JSXElement"] }],
        "react/jsx-indent": ["error", 4],
        semi: [2, "always"],
        quotes: [2, "double"],
        "react/react-in-jsx-scope": "off",
        "max-len": ["error", 150, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: false,
            ignoreTemplateLiterals: false,
        }],
    },
};
