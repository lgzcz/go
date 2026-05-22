import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],

  // 保留你原本的 Less 配置
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  // 保留你原本的开发服务器端口
  server: {
    port: 3000,
  },

  // ==============================================
  // 👇👇👇 这里是新增的【全站极速优化配置】👇👇👇
  // ==============================================
  build: {
    // 自动给所有资源加哈希（解决缓存只有10分钟的问题）
    filenameHashing: true,
    assetsDir: 'assets',

    // 小于 4KB 的图片/字体直接内联，减少请求
    assetsInlineLimit: 4096,

    // 代码压缩 + 资源分包
    minify: 'terser',
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        // 给所有文件加上哈希，实现 1 年长效缓存
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