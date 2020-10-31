// @ts-check
import reactPlugin from 'vite-plugin-react'
import { resolve } from 'path'

/**
 * @type { import('vite').UserConfig }
 */
export default {
  jsx: 'react',
  plugins: [reactPlugin],
  port: 1234,
  alias: {
    '/@components/': resolve(__dirname, './src/components')
  }
}
