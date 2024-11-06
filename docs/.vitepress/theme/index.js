// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import CodeRunner from './components/CodeRunner.vue'
import ApiTable from "./components/ApiTable.vue";
import yamaUi from 'yama-ui'
import 'virtual:svg-icons-register'
import 'virtual:windi.css'
/** @type {import('vitepress').Theme} */
// /** @type {import('windicss').Config} */
export default {
  title: 'Yama',
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp: async ({ app, router, siteData }) => {
    // ...
    if (!import.meta.env.SSR) {
      for (const [key, component] of Object.entries(yamaUi)) {
        app.component(key, component)
      }
    }
    app.component('CodeRunner', CodeRunner)
    app.component('ApiTable', ApiTable)
  }
}
