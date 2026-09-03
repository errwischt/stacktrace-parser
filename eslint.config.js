const prettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  {
    ignores: ['dist/**'],
  },
  {
    files: ['src/**/*.js', 'test/**/*.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        describe: 'readonly',
        it: 'readonly',
        module: 'writable',
        require: 'readonly',
      },
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
    },
  },
  prettierRecommended,
];
