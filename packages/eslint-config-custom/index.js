module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["solid"],
    extends: ["plugin:solid/typescript", "turbo", "prettier"],
    rules: {
        indent: ["error", 4],
    },
};
