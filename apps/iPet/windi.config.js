import { defineConfig } from 'windicss/helpers'
function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}
export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}', 'index.html'],
    exclude: ['node_modules', '.git']
  },
  attributify: {
    prefix: "ipet:",
  },
  theme: {
  },
  alias: {
    'large': 'text-[100px]',
    'error': 'text-[red]'
  },
  shortcuts: {
    'hstack': 'flex items-center',
    'vstack': 'flex flex-col',
    'sm-icon': 'w-[48px] h-[48px]'
  }
})
