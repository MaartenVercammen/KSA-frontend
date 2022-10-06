module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  rules: {
    // Disable unless prop-types are used.
    'react/prop-types': 'off',
  },
  env: {
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.eslint.json'
  }
};

