import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { terser } from 'rollup-plugin-terser'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'react16',
      fileName: (format) => `${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      plugins: [terser()],
      output: {
        globals: {
          'react': 'React_16_14_0',
          'react-dom': 'ReactDOM_16_14_0',
        }
      },
    },
    write: true,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  }
})
