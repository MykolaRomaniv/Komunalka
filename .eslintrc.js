module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'app/', '.'],
      },
    },
  },
  rules: {
    'react/prop-types': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true },
    ],
    'import/no-cycle': 0,
    'react/require-default-props': 'off',
    'simple-import-sort/imports': 'error',
    'jsx-a11y/alt-text': 2,
    'react-hooks/exhaustive-deps': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-curly-brace-presence': [
      1,
      { props: 'never', children: 'always' },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
