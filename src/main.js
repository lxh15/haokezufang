import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入字体图标css
import '@/assets/fonts/iconfont.css'
// 引入want 组件库
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入flexble
import 'amfe-flexible/index.min.js'
// 设置图片根地址
const imgSrc = 'http://liufusong.top:8080'
Vue.prototype.imgSrc = imgSrc

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
