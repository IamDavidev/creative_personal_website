module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    indent: [
      'error'
    ]
  }
}
