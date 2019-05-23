//入口文件2
import  Vue from 'vue'

//导入app根组件
import app from './App.vue'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'

// 按需导入 Mint-UI 中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)











var vm = new Vue({
  el:'#app',
  render:c =>c(app)
})