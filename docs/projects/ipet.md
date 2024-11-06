# 猫坞

使用Vue3/Vite版

Vue3/Vite版要求 node 版本 18+、20+

在apps目录下运行
```shell
  npx degit dcloudio/uni-preset-vue#vite iPet
```

### 移动端样式处理
WindiCSS单独配置文件

### 单位处理
根目录下给app/iPet安装依赖
```shell
pnpm --filter iPet add amfe-flexible postcsspxtoviewport -D
```
vite.config.js配置

```js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import postcsspxtoviewport from "postcss-px-to-viewport";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    WindiCSS(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), '../../packages/ui/assets/icons')],
      // 指定格式
      symbolId: 'icon-yama-[name]'
    })
  ],
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: "px", // 要转化的单位
          viewportWidth: 750, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          landscape: false, // 是否处理横屏情况
        }),
      ],
    },
  }
})
```

main.js引入amfe-flexible

```js
import 'amfe-flexible'
```