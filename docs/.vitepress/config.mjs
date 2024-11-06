import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yama",  
  description: "yama document",
  themeConfig: {
    logo: '/assets/images/cat.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guides/createProject' }
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
  }
})
