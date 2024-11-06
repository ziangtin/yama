import { defineConfig } from 'vitepress'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yama",
  base: '/yama/',
  description: "yama document",
  themeConfig: {
    logo: '/images/cat.svg',
    outline: {
      label: '页面导航'
    },
    returnToTopLabel: '返回顶部',
    lastUpdated: {
      text: '上次更新',
    },
    search: {
      // provider: 'algolia', 
      // appId: '...',
      // apiKey: '...',
      // indexName: '...',
      // options: {
      //   placeholder: '搜索文档',
      //   translations: {
      //     button: {
      //       buttonText: '搜索文档',
      //       buttonAriaLabel: '搜索文档'
      //     },
      //     modal: {
      //       searchBox: {
      //         resetButtonTitle: '清除查询条件',
      //         resetButtonAriaLabel: '清除查询条件',
      //         cancelButtonText: '取消',
      //         cancelButtonAriaLabel: '取消'
      //       },
      //       startScreen: {
      //         recentSearchesTitle: '搜索历史',
      //         noRecentSearchesText: '没有搜索历史',
      //         saveRecentSearchButtonTitle: '保存至搜索历史',
      //         removeRecentSearchButtonTitle: '从搜索历史中移除',
      //         favoriteSearchesTitle: '收藏',
      //         removeFavoriteSearchButtonTitle: '从收藏中移除'
      //       },
      //       errorScreen: {
      //         titleText: '无法获取结果',
      //         helpText: '你可能需要检查你的网络连接'
      //       },
      //       footer: {
      //         selectText: '选择',
      //         navigateText: '切换',
      //         closeText: '关闭',
      //         searchByText: '搜索提供者'
      //       },
      //       noResultsScreen: {
      //         noResultsText: '无法找到相关结果',
      //         suggestedQueryText: '你可以尝试查询',
      //         reportMissingResultsText: '你认为该查询应该有结果？',
      //         reportMissingResultsLinkText: '点击反馈'
      //       }
      //     }
      //   }
      // }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guides/createProject' },
      { text: '组件', link: '/components/svgIconUsage' },
      { text: '项目', link: '/projects/ipet' },
      {
        text: '参考',
        items: [
          { text: '常见问题', link: '/matter/index' },
        ]
      }
    ],
    sidebar: {
      '/guides/': [
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
      '/components/': [

        {
          text: '组件',
          items: [
            { text: 'svgIcom', link: '/components/svgIconUsage' },
          ]
        }
      ],
      '/matter/': [
        { text: '常见问题', link: '/matter/index' }
      ],
      '/projects/': [
        {
          text: '项目',
          items: [{ text: '宠坞', link: '/projects/ipet' }]
        }
      ]
    },
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
