// eslint.config.ts
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintPluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['dist', 'build', 'node_modules'],
  },

  ...tseslint.config(
    {
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          ...globals.browser,
          ...globals.node,
        },
        parserOptions: {
          ecmaFeatures: { jsx: true },
          // project: ['./tsconfig.json'],
          // tsconfigRootDir: new URL('.', import.meta.url),
        },
      },
      plugins: {
        '@typescript-eslint': tseslint.plugin,
        react,
        'react-hooks': reactHooks,
        import: eslintPluginImport,
        'jsx-a11y': jsxA11y,
        prettier: prettierPlugin,
      },
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: true,
          node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        },
      },
      rules: {
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/order': [
          'warn',
          {
            groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'prettier/prettier': 'warn',
      },
    },
  ),
];