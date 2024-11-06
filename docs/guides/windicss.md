# 引入windi css

安装
```shell
pnpm add  vite-plugin-windicss windicss -D -w
```
vite.config.js
import Wind配种
```js
import WindiCSS from 'vite-plugin-windicss'
export default defineConfig({
  plugins: [
    WindiCSS()
  ]
})
```

main.js配置
```
import 'virtual:windi.css'
```

windi.config.js
```js
import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  
  theme: {
  },
  plugins: [formsPlugin],
})
```

使用
```html
<p class='text-[12px] text-[#ccc] m-[0]'>test</p>
```


