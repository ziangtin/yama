import { defineConfig } from 'windicss/helpers'
function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}
export default defineConfig({
  extract: {
    include: [
      'src/**/*.{vue,html,jsx,tsx}',
      'index.html', 
      '*/**/*.{vue,html,jsx,tsx,md}', 
      'index.md',
      './.vitepress/**/*.{js,ts,vue}'
    ],
    exclude: ['node_modules', '.git']
  },
  attributify: {
    prefix: "yama:",
  },
  // 白名单
  safelist: [
    range(3).map(i => `p-${i}`), // p-1 到 p-3
    range(10).map(i => `mt-${i}`), // mt-1 到 mt-10
  ]

  ,
  theme: {
  },
  alias: {
    'large': 'text-[100px]',
    'error': 'text-[red]'
  },
  shortcuts: {
    'hstack': 'flex items-center',
    'vstack': 'flex flex-col',
  }
})
