# qiankun

### 开始
在apps目录下创建三个应用
```shell
pnpm create vite
```
本文档创建的的vue项目举例

```
.
└─apps  # 应用代码目录
   ├─iPetAdmin  # 子应用
   └─main # 基座
```
### 主应用

在根目录安装qiankun，单独安装在主应用中

```shell
  pnpm --filter main add qiankun -w -D
```
子应用配置文件在apps/main/src/qiankun/config.js
```js
function genActiveRule(routerPrefix, currentRoute = '') {
  return location => location.pathname.startsWith(routerPrefix)
}
const msg = {}
const APP_CONF = [
  {
    /**
     * name: 子服务有唯一性 - 这个需要与子服务packages一致
     * entry: 子服务入口 - 通过该地址加载微应用
     * container: 子服务挂载节点 - 微应用加载完成后将挂载在该节点上 - 与上述qiankunVue3Layout.vue id一致
     * activeRule: 子服务触发的路由规则 - 触发路由规则后将加载该微应用 - 与上述创建子服务路由前缀一致
     * props 共享数据到子服务
     * sandbox 开启沙箱
     */
    name: "ipetadmin",
    entry: process.env.NODE_ENV === 'development'
      ? '//localhost:7000'
      : '/ipetadmin/index.html',
    activeRule: genActiveRule("/yama/ipet-admin"),
    container: "#sub-app",
    props: msg,
    sandbox: {
      strictStyleIsolation: true
    }
  },
]
export default APP_CONF
```

apps/main/src/qiankun/config.js开启qiankun
```js
import { registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'
import APP_CONF from './config'
export function registerApps() {
  try {
    registerMicroApps(APP_CONF, {
      beforeLoad: [
        app => {
          console.log('before load', app)
        }
      ],
      beforeMount: [
        app => {
          console.log('before mount', app)
        }
      ],
      afterUnmount: [
        app => {
          console.log('before unmount', app)
        }
      ]
    })
  } catch (err) {
    console.log(err)
  }
  addGlobalUncaughtErrorHandler((event) => console.log(event))
}
```
主应用增加一个子应用容器的组件apps/main/src/components/subApp.vue
```vue
<template>
  <div id="sub-app"></div>
</template>

<script setup>
  import { start } from 'qiankun'
  import { registerApps } from '@/qiankun/index'
  import { onMounted } from 'vue'

  onMounted(() => {
    if (!window.qiankunStarted) {
      console.log(window.qiankunStarted)
      window.qiankunStarted = true
      registerApps()
      start({
        sandbox: {
          experimentalStyleIsolation: true // 样式隔离
        }
      })
    }
  })
</script>
```

主应用路由加载子应用的容器组件
```js
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory('/yama'),
  routes: [
      {
      path: '/main',
      redirect: { name: 'home' },
      meta: { title: '首页' },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/entry/home.vue')
        },
        {
          path: '/ipet-admin/:pathMatch(.*)*',
          name: 'iPetAdminApp',
          meta: {},
          component: () => import('../components/subApp/index.vue')
        }
      ]
    }
  ],
});

export default router
```

### 子应用

根目录安装vite-plugin-qiankun
```shell
 pnpm add vite-plugin-qiankun -D -w
```
vite.config.js
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import path from 'path'
import { name } from './package.json'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
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
```

main.js修改
```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import router from './router'

let app
const render = (container) => {
  app = createApp(App)
  app
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app')
  return app
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container } = props
      app = render(container)
    },
    bootstrap() { },
    unmount() {
      app.unmount()
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
```


### 本地启动
```shell
  #启动主应用
  pnpm --filter main dev

  #启动子应用 
  pnpm --filter ipetadmin dev
```
通过主应用路由跳转访问子应用

