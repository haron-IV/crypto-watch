module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 0,
    'no-console': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'no-shadow': 0,
    'import/no-unresolved': 0,
    'nonblock-statement-body-position': 0,
    'lines-between-class-members': 0,
    curly: 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'no-confusing-arrow': 0,
    'function-paren-newline': 0,
    'operator-linebreak': 0,
  },
}
