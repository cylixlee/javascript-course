import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs}'], plugins: { stylistic }, extends: ['stylistic/recommended'] },
  {
    rules: {
      'no-unused-vars': ['warn'],
      '@stylistic/brace-style': ['error', '1tbs'],
    },
  },
])

// With ESLint extension installed in VSCodium, just set some settings in "[javascript]"."editor.codeActionsOnSave" to
// get the functionality of import organizing and sorting. No need to introduce some dependencies like
// `eslint-plugin-import`.
