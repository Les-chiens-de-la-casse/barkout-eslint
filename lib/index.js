module.exports = {
  configs: {
    angular: {
      plugins: [
        '@angular-eslint',
        'prettier',
        '@typescript-eslint'
      ],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
      ],
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
        'quotes': ['error', 'single']
      }
    },
    nestjs: {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      root: true,
      env: {
        node: true,
        jest: true,
      },
      ignorePatterns: ['.eslintrc.js'],
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
        'quotes': ['error', 'single']
      },
    }
  }
};
