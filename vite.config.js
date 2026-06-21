import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  server: {
    port: 3000,
  },
  build: {
    filenameHashing: true,
    assetsDir: 'assets',

    assetsInlineLimit: 4096,

    minify: 'terser',
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },

  // 预构建依赖，让首屏更快
  optimizeDeps: {
    include: ['vue'],
  },
});