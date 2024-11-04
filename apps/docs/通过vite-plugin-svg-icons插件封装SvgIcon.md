# 通过vite-plugin-svg-icons插件封装SvgIcon


```shell
  pnpm add vite-plugin-svg-icons -D -w
```

vite.config.js配置

```js
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineConfig({
  plugins: [
    vue(),
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
```

main.js
```javascript

import 'virtual:svg-icons-register'

```

封装SvgIcon组件 @/packages/ui/components/svgIcon

```js
<script setup>
  import { computed } from "vue";
  const props = defineProps({
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'red'
    },
    fillClass: {
      type: String,
      default: ''
    }
  })
  // 真实显示的svg图标
  const symbolId = computed(() => `#icon-yama-${props.name}`);
</script>

<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :class="fillClass" :fill="color" />
  </svg>
</template>
<style lang="less" scoped></style>
```

组件导出 @/packages/ui/index.js
```js
import SvgIcon from './components/svgIcon/index.vue';

export { SvgIcon };
```

组件使用
全局注册 main.js
```js
  import { SvgIcon } from 'yama-ui'
  import { createApp } from "vue";
  import App from "./App.vue";
  createApp(App).component("svg-icon", SvgIcon).mount('#app) 
```
页面按需引入
```js

  import { SvgIcon } from 'yama-ui'

```
页面使用
```html

  <svg-icon name="bell"/>

```



