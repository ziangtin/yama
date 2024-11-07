function genActiveRule(routerPrefix, currentRoute = '') {
  return location => location.pathname.startsWith(routerPrefix)
}
const msg = {}
const APP_CONF = [
  {
    /**
     * name: 子服务有唯一性 - 这个需要与子服务webpack name一致
     * entry: 子服务入口 - 通过该地址加载微应用
     * container: 子服务挂载节点 - 微应用加载完成后将挂载在该节点上 - 与上述qiankunVue3Layout.vue id一致
     * activeRule: 子服务触发的路由规则 - 触发路由规则后将加载该微应用 - 与上述创建子服务路由前缀一致
     * props 共享数据到子服务
     * sandbox 开启沙箱
     */
    name: "vue3",
    entry: process.env.NODE_ENV === 'development'
      ? '//localhost:7001'
      : '/vue3/index.html',
    activeRule: genActiveRule("/yama/vue3"),
    container: "#sub-app",
    props: msg,
    sandbox: {
      strictStyleIsolation: true
    }
  },
  {
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