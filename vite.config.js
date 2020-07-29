// @ts-check
const reactPlugin = require('vite-plugin-react')
import { resolve } from 'path'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
}

module.exports = config
