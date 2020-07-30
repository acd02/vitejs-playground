// @ts-check
const reactPlugin = require('vite-plugin-react')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  port: 1234
}

module.exports = config
