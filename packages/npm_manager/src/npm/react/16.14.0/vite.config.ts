import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    outDir: "dist/npm/react/16.14.0",
    lib: {
      entry: 'src/npm/react/16.14.0/index.ts',
      name: 'React_16_14_0',
      fileName: (format) => `${format}.js`,
      formats: ['umd'],
    },
    rollupOptions: {
      external: [],
      plugins: [terser()],
      output: {
        globals: {
          'react': 'React_16_14_0',
        }
      },
    },
    write: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
});
