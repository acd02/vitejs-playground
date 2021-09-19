const colors = require('./tailwind/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/components/**/*.tsx', './src/App.tsx', './src/main.tsx'],
  theme: {
    colors,
  },
}
