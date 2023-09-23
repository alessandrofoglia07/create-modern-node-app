/** @type {import('eslint').Linter.Config} */
const config = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off'
    },
    ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'public', '*.config.js'],
    env: {
        es2022: true,
        node: true
    }
};

module.exports = config;
