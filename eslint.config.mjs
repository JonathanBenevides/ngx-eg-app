import tslint from 'typescript-eslint';
import eslint from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    'node_modules/*',
    'dist/*',
    '.angular/*'
  ]),
  {
    files: ['**/*.ts'],
    ignores: ['**/*.spec.ts'],
    plugins: {
      'tslint': tslint.plugin,
      'eslint': eslint,
      'stylistic': stylistic
    },
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'semi': ['error', 'always'],
      'tslint/adjacent-overload-signatures': 'error',
      'tslint/array-type': ['error', { 'default': 'array' }],
      'tslint/consistent-return': 'error',
      'tslint/consistent-type-assertions': 'error',
      'tslint/explicit-function-return-type': 'error',
      'tslint/no-explicit-any': 'error',
      'tslint/naming-convention': [
        'error',
        {
          'selector': ['function'],
          'format': ['camelCase'],
          'leadingUnderscore': 'forbid',
          'trailingUnderscore': 'forbid',
        },
        {
          'selector': ['variable'],
          'format': ['camelCase', 'UPPER_CASE'],
          'leadingUnderscore': 'allow',
          'trailingUnderscore': 'allow',
        }
      ],
      'tslint/no-require-imports': 'error',
      'tslint/no-shadow': 'error',
      'tslint/no-unused-expressions': 'error',
      'tslint/no-unused-vars': 'error',
      'tslint/no-useless-empty-export': 'error',
      'tslint/prefer-readonly': 'error',
      'tslint/no-magic-numbers': 'error',
      'tslint/member-ordering': [
        'error',
        {
          'classes': [
            'field',
            'constructor',
            'method'
          ],
          'interfaces': [
            'signature',
            'field',
            'constructor',
            'method'
          ]
        }
      ],
      'tslint/no-array-delete': 'error',
      'tslint/no-duplicate-type-constituents': 'error',
      'tslint/no-empty-function': 'error',
      'tslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],

      'stylistic/array-bracket-spacing': ['error', 'never'],
      'stylistic/arrow-spacing': 'error',
      'stylistic/brace-style': 'error',
      'stylistic/comma-dangle': ['error', 'never'],
      'stylistic/comma-spacing': ['error', { "before": false, "after": true }],
      'stylistic/comma-style': ['error', 'last'],
      'stylistic/dot-location': ['error', 'property'],
      'stylistic/function-call-spacing': ["error", "never"],
      'stylistic/indent': ['error', 2, { 'SwitchCase': 1 }],
      'stylistic/key-spacing': ["error", { "beforeColon": false }],
      'stylistic/keyword-spacing': ["error", { "before": true }],
      'stylistic/no-multi-spaces': 'error',
      'stylistic/no-multiple-empty-lines': ['error', { 'max': 1 }],
      'stylistic/no-trailing-spaces': 'error',
      'stylistic/object-curly-spacing': ["error", "always"],

      'sort-imports': ['error', {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'allowSeparatedGroups': false
      }],

      'eslint/order': [
        'error',
        {
          'alphabetize': {
            caseInsensitive: true,
            order: 'asc',
          },
          'groups': ['external', 'builtin', 'parent', ['sibling', 'index']],
          'newlines-between': 'always',
          'pathGroups': [
            {
              group: 'external',
              pattern: 'react',
              position: 'before',
            },
            {
              group: 'external',
              pattern: '@my_org/**',
              position: 'after',
            },
          ],
          'pathGroupsExcludedImportTypes': ['builtin'],
        },
      ],
      'no-useless-constructor': 'error',
      'no-throw-literal': 'error',
      'no-undef': 'off',
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      'no-debugger': 'error',
      'no-irregular-whitespace': 'error',
      'no-empty': 'error',
      'no-inline-comments': 'error',
      'camelcase': ['error', { 'properties': 'always' }],

      'tslint/ban-ts-comment': 'error',
      'tslint/no-non-null-asserted-optional-chain': 'error',
      // 'tslint/no-unsafe-argument': 'off',
      // 'tslint/no-unsafe-assignment': 'off',
      // 'tslint/no-unsafe-call': 'off',
      // 'tslint/no-unsafe-member-access': 'off',
      // 'tslint/no-unsafe-return': 'off',
      'tslint/no-empty-interface': 'error',
      'tslint/no-deprecated': 'error',
      'tslint/prefer-find': 'error',
      'tslint/prefer-optional-chain': 'error',
      'tslint/prefer-string-starts-ends-with': 'error',
      'tslint/unified-signatures': 'error',
      'eslint/no-empty-named-blocks': 'error',
      'eslint/no-unused-modules': 'error'
    }
  },
  {
    files: ['**/*.spec.ts'],
    plugins: {
      'tslint': tslint.plugin,
      'eslint': eslint,
      'stylistic': stylistic
    },
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'semi': ['error', 'always'],
      'eslint/order': [
        'error',
        {
          'alphabetize': {
            caseInsensitive: true,
            order: 'asc',
          },
          'groups': ['external', 'builtin', 'parent', ['sibling', 'index']],
          'newlines-between': 'always',
          'pathGroups': [
            {
              group: 'external',
              pattern: 'react',
              position: 'before',
            },
            {
              group: 'external',
              pattern: '@my_org/**',
              position: 'after',
            },
          ],
          'pathGroupsExcludedImportTypes': ['builtin'],
        },
      ],
      'sort-imports': ['error', {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'allowSeparatedGroups': false
      }],
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      'stylistic/array-bracket-spacing': ['error', 'never'],
      'stylistic/arrow-spacing': 'error',
      'stylistic/brace-style': 'error',
      'stylistic/comma-dangle': ['error', 'never'],
      'stylistic/comma-spacing': ['error', { "before": false, "after": true }],
      'stylistic/comma-style': ['error', 'last'],
      'stylistic/dot-location': ['error', 'property'],
      'stylistic/function-call-spacing': ["error", "never"],
      'stylistic/indent': ['error', 2, { 'SwitchCase': 1 }],
      'stylistic/key-spacing': ["error", { "beforeColon": false }],
      'stylistic/keyword-spacing': ["error", { "before": true }],
      'stylistic/no-multi-spaces': 'error',
      'stylistic/no-multiple-empty-lines': ['error', { 'max': 1 }],
      'stylistic/no-trailing-spaces': 'error',
      'stylistic/object-curly-spacing': ["error", "always"],
    }
  }
]);
