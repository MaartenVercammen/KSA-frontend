module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.eslint.json'
  }
};

