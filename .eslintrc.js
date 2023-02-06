module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2022,
  }
};
  