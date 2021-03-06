import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App.vue'
import router from './routers'

// 引入样式
import '@/assets/styles/main.css' 			        // 公共样式
import 'element-ui/lib/theme-chalk/index.css'   // elment-ui 样式
import '@/assets/fonts/iconfont.css' 						// 图标字体

Vue.config.productionTip = false

Vue.use(ElementUI, { locale, size: 'small' })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
