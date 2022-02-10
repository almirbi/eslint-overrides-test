module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "quotes": ["error", "single"]
    },
    overrides: [
        {
          files: ["*.js"],
          extends: ["eslint:recommended"],
          rules: {
            "quotes": ["error", "double"]
        },
        }
    ]
}
