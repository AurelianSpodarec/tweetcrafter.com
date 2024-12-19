import plugin from 'tailwindcss/plugin'

import { DashboardThemeNames, TwitterThemeNames, TwitterThemePrimary } from './themeNames'
import themeConfig from './themeConfig'

export const theming = plugin(
  function ({ addBase, theme }) {
    addBase({
      ':root': {
        '--border-default': theme('border.lg')
      },
      [`.${DashboardThemeNames.Light}`]: {
        '--primary': theme('colors.pink.600'),
        '--secondary': theme('colors.white')
      },
      [`.${DashboardThemeNames.Dark}`]: {
        '--primary': theme('colors.green.400'),
        '--secondary': theme('colors.black.550')
      },
      [`.${DashboardThemeNames.Theme1}`]: {
        '--primary': theme('colors.yellow.400'),
        '--secondary': theme('colors.blue.500')
      },
      [`.${DashboardThemeNames.Theme2}`]: {
        '--primary': theme('colors.yellow.300'),
        '--secondary': theme('colors.purple.900')
      },
      [`.${DashboardThemeNames.Theme3}`]: {
        '--primary': theme('colors.yellow.300'),
        '--secondary': theme('colors.purple.900')
      },
      // Twitter
      // Twitter Primary

      // Twitter Theme
      [`.${TwitterThemeNames.Default}`]: {
        '--twitter-card': theme('colors.gray.200'),
      },
      [`.${TwitterThemeNames.Dark}`]: {
        '--twitter-card': theme('colors.gray.500'),
      },
      [`.${TwitterThemeNames.LightsOut}`]: {
        '--twitter-card': theme('colors.red.900'),
      },
      // TwitterThemePrimary
      [`.${TwitterThemePrimary.Blue}`]: {
        '--twitter-primary': theme('colors.blue.700'),
      },
      [`.${TwitterThemePrimary.Yellow}`]: {
        '--twitter-primary': theme('colors.yellow.700'),
      },
      [`.${TwitterThemePrimary.Pink}`]: {
        '--twitter-primary': theme('colors.pink.700'),
      },
      [`.${TwitterThemePrimary.Purple}`]: {
        '--twitter-primary': theme('colors.purple.700'),
      },
      [`.${TwitterThemePrimary.Orange}`]: {
        '--twitter-primary': theme('colors.yellow.700'),
      },
      [`.${TwitterThemePrimary.Green}`]: {
        '--twitter-primary': theme('colors.green.700'),
      },
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
