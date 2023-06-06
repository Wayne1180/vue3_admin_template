import SvgIcon from './SvgIcon/index.vue'
// 全局对象
const allGlobalComponent = { SvgIcon }
// 对外暴露插件对象
export default {
  // 务必叫做install方法
  install(app) {
    Object.keys(allGlobalComponent).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGlobalComponent[key])
    })
  },
}
