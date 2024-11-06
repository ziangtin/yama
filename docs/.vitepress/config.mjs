import { defineConfig } from 'vitepress'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yama",
  base:'/yama/',
  description: "yama document",
  themeConfig: {
    logo: '/assets/images/cat.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guides/createProject' },
      { text: '组件', link: '/components/svgIconUsage' }
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '创建单仓库多项目', link: '/guides/createProject' },
          { text: 'Windi CSS', link: '/guides/windicss' },
          { text: 'svg图标', link: '/guides/svgIcon' },
          { text: 'ant', link: '/guides/ant' }
        ]
      }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      // copyright: 'Copyright © 2019-present Evan You'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ziangtin/yama' }
    ]
  },
  vite: {
    plugins: [
      WindiCSS({
        config: path.resolve(process.cwd(), 'windi.config.js')
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'packages/ui/assets/icons')],
        // 指定格式
        symbolId: 'icon-yama-[name]'
      })
    ],
  },
})
