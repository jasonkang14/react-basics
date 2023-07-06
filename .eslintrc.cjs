module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks'],
  settings: { react: { version: 'detect' } },

  rules: {
    'prettier/prettier': 'error',
    'no-implicit-coercion': 'error',

    'no-undef': 'off',

    indent: 'off',
    '@typescript-eslint/indent': 'off',
    semi: 'off',

    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'no-extra-boolean-cast': 'off',

    'getter-return': 'warn',

    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/no-use-before-define': 'off',

    '@typescript-eslint/no-empty-interface': 'off',

    '@typescript-eslint/no-parameter-properties': 'off',

    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'util',
            importNames: ['isArray'],
            message: '`Array.isArray`를 대신 사용해주세요!',
          },
        ],
      },
    ],

    'no-async-promise-executor': 'warn',
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow',
      },
      { format: ['camelCase', 'PascalCase'], selector: 'function' },
      { format: ['PascalCase'], selector: 'interface' },
      { format: ['PascalCase'], selector: 'typeAlias' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'private-static-field',
          'public-instance-field',
          'private-instance-field',
          'public-constructor',
          'private-constructor',
          'public-instance-method',
          'private-instance-method',
        ],
      },
    ],
    'no-warning-comments': [
      'warn',
      {
        terms: ['TODO', 'FIXME', 'XXX', 'BUG'],
        location: 'anywhere',
      },
    ],
    'prefer-const': 'error',
    'no-var': 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/no-duplicates': 'error',

    'react/prop-types': 'off',

    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'react/jsx-no-target-blank': 'error',

    '@typescript-eslint/no-var-requires': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
};
