module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [ 'import', 'react', 'react-hooks', 'prettier' ],
  rules: {
    'prettier/prettier': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-unexpected-multiline': 'off',
    'no-use-before-define': 'off',
    'spaced-comment': 'off',
    'no-param-reassign': 'off',
    'eol-last': [ 'warn', 'always' ],
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'off',
    'quotes': [ 'warn', 'single' ],
    'semi': [ 2, 'always', ],
    'array-bracket-spacing': [ 1, 'always', {
      arraysInArrays: true,
      singleValue: true,
      objectsInArrays: true,
    }, ],
    'object-curly-spacing': [ 1, 'always', ],
    'no-shadow': 'off',
  
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    
    'jsx-quotes': [ 'error', 'prefer-single' ],
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [ '.js', '.jsx' ],
      },
    ],
    'react/no-danger': 'off',
    'react/jsx-curly-brace-presence': [ 'warn', { props: 'never', children: 'never' } ],
    'react/require-default-props': 'off',
    
    'react-hooks/exhaustive-deps': 'off',
  
    'jsx-a11y/anchor-is-valid': [ 'error', {
      'components': [ 'Link' ],
      'specialLink': [ 'hrefLeft', 'hrefRight' ],
      'aspects': [ 'invalidHref', 'preferButton' ]
    } ],
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
};
