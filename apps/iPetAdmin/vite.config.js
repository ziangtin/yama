import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import path from 'path'
import { name } from './package.json'
export default defineConfig({
  base: '/yama/ipet-admin/',
  plugins: [
    vue(),
    qiankun(name, {
      useDevMode: true
    })
  ],
  server: {
    port: 7000,
    //本地开发资源文件在主应用中加载失败，需要加上
    origin: "http://localhost:7000",
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
})