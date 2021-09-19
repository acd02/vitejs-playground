import reactRefresh from '@vitejs/plugin-react-refresh'
import { UserConfig, ConfigEnv } from 'vite'
import { join } from 'path'

const srcRoot = join(__dirname, 'src')

/**
 * @type { import('vite').UserConfig }
 */
export default ({ command }: ConfigEnv): UserConfig => ({
  base: '/',
  plugins: [reactRefresh()],
  alias: {
    '/@': srcRoot,
    '/@components': `${srcRoot}/components`,
  },
  build: {
    outDir: join(srcRoot, '/out'),
    emptyOutDir: true,
    rollupOptions: {},
  },
  server: {
    port: process.env.PORT === undefined ? 3004 : +process.env.PORT,
  },
  optimizeDeps: {
    exclude: ['path'],
  },
})
