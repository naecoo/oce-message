import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
  mode: 'production',
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'oceMessage',
      fileName: (format) => `oce-message.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    createVuePlugin({
      vueTemplateOptions: {

      }
    })
  ]
});