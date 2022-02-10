module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
    ],
    overrides: [
        {
          files: ["test.js"],
          extends: ["eslint:recommended"]
        }
    ]
}
