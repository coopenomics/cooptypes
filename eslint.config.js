import antfu from '@antfu/eslint-config'

// @ts-check

export default antfu(
  {
    ignores: [
      'docs/**/*',
    ],
  },
  {
    rules: {
      'jsdoc/empty-tags': 'off', // Добавьте это правило игнора
    },
  },
)
