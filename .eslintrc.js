module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [ 'import', 'react', 'react-hooks', ],
  rules: {
    // 일반 규칙
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-unexpected-multiline': 'off',
    'no-use-before-define': 'off',
    'spaced-comment': 'off',
    'no-param-reassign': 'off',
    'eol-last': [ 'warn', 'always', ],
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'off',
    quotes: [ 'warn', 'single', { allowTemplateLiterals: true, }, ],
    semi: [ 'error', 'always', ],
    'array-bracket-spacing': [
      'warn',
      'always',
      {
        arraysInArrays: true,
        singleValue: true,
        objectsInArrays: true,
      },
    ],
    'object-curly-spacing': [ 'warn', 'always', ],
    'no-shadow': 'off',
    indent: [ 'warn', 2, { SwitchCase: 1, }, ],
    'comma-dangle': [ 'warn', {
      arrays: 'always',
      functions: 'never',
      objects: 'always',
      imports: 'never',
      exports: 'never',
    }, ],
    'jsx-quotes': [ 'error', 'prefer-single', ],
    'linebreak-style': [ 'warn', 'windows', ],
    'max-len': 'off',
    'lines-between-class-members': 'off',
    'no-underscore-dangle': 'off',

    // 임포트 규칙
    'import/extensions': [ 'error', 'never', {
      ignorePackages: true,
      pattern: {
        json: 'always',
      },
    }, ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',

    // 리액트 규칙
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [ 'error', {
      extensions: [ 'js', 'jsx', '.ts', '.tsx', ],
    }, ],
    'react/no-danger': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never', },
    ],
    'react/require-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/display-name': 'off',

    // 리액트 훅스 규칙
    'react-hooks/exhaustive-deps': 'off',

    // jsx 규칙
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [ 'Link', ],
        specialLink: [ 'hrefLeft', 'hrefRight', ],
        aspects: [ 'invalidHref', 'preferButton', ],
      },
    ],
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
};
