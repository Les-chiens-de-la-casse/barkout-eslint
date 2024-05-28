module.exports = {
  configs: {
    angular: {
      parser: '@typescript-eslint/parser',
      plugins: ['@angular-eslint', '@typescript-eslint', 'prettier'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
      ],
      ignorePatterns: ['.eslintrc.js', 'dist/', 'node_modules/'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'prettier/prettier': [
          'error',
          {
            'endOfLine': 'auto',
            'singleQuote': true,
          }
        ],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }]
      }
    },
    nestjs: {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'prettier'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      ignorePatterns: ['.eslintrc.js', 'dist/', 'node_modules/'],
      root: true,
      env: {
        node: true,
        jest: true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'prettier/prettier': [
          'error',
          {
            'endOfLine': 'auto',
            'singleQuote': true,
          }
        ],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }]
      },
    }
  }
};
