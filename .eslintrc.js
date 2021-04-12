module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      configFile: './babel.config.json'
    }
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'max-len': ['error', { code: 120 }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': ['error', 'never'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': ['error', { props: false }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  },
  plugins: [
    '@babel'
  ]
};
