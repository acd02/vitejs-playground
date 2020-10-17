const plugin = require('tailwindcss/plugin')
const colors = require('./tailwind/colors')
const utilities = require('./tailwind/utilities')

module.exports = {
  purge: ['./src/components/**/*.tsx', './src/App.tsx', './src/main.tsx'],
  theme: {
    colors,
    extend: {},
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'important', 'important-hover'],
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }),
    plugin(function ({ addVariant }) {
      addVariant('important-hover', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!hover-${rule.selector.slice(1)}:hover`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({ ...utilities })
    }),
  ],
}
