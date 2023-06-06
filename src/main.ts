import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

import 'virtual:svg-icons-register'

// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'
// 引入路由
import router from './router'
app.use(router)
app.use(globalComponent)
// 引入模板的全局的样式
import '@/styles/index.scss'
app.use(Antd).mount('#app')
