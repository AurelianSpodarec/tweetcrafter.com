import plugin from 'tailwindcss/plugin'

import ThemeNames from './themeNames'
import themeConfig from './themeConfig'

export const theming = plugin(
  function ({ addBase, theme }) {
    addBase({
      ':root': {
        '--border-default': theme('border.lg')
      },
      [`.${ThemeNames.Light}`]: {
        '--primary': theme('colors.pink.600'),
        '--secondary': theme('colors.white')
      },
      [`.${ThemeNames.Dark}`]: {
        '--primary': theme('colors.green.400'),
        '--secondary': theme('colors.black.950')
      },
      [`.${ThemeNames.Pink}`]: {
        '--primary': theme('colors.yellow.400'),
        '--secondary': theme('colors.blue.900')
      },
      [`.${ThemeNames.Imperial}`]: {
        '--primary': theme('colors.yellow.300'),
        '--secondary': theme('colors.purple.900')
      }
    }),
    addBase({
      "html, body": {
        '@apply h-full' : {}
      },
      body: {
        '@apply bg-secondary': {}
      }
    })
  },
  {
    theme: {
      ...themeConfig.theme,
    }
  }
)
