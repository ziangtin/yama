import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineConfig({
  base:'/yama/',
  plugins: [
    vue(),
    WindiCSS({
      config:path.resolve(__dirname, '../../windi.config.js')
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), '../../packages/ui/assets/icons')],
      // 指定格式
      symbolId: 'icon-yama-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
})
