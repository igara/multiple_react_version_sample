import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    outDir: "dist/npm/react-dom/18.2.0",
    lib: {
      entry: 'src/npm/react-dom/18.2.0/index.ts',
      name: 'ReactDOM_18_2_0',
      fileName: (format) => `${format}.js`,
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['react'],
      plugins: [terser()],
      output: {
        globals: {
          'react': 'React_18_2_0',
          'react-dom': 'ReactDOM_18_2_0',
        }
      },
    },
    write: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
});
