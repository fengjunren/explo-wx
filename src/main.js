import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import {Base64} from 'js-base64'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import common from './utils/common'
import RSA from './utils/rsa'
import AES from './utils/aes'
import wxbase from './utils/wxbase'
import {http} from './utils/http'
import VueScroller from 'vue-scroller'
// import filters from './filters'

Vue.config.productionTip = false

Vue.use(MuseUI)
 
Vue.use(VueScroller)
// 注册全局混合
Vue.mixin(mixins)

// 全局变量
Vue.prototype.$Base64 = Base64
Vue.prototype.$common = common
Vue.prototype.$RSA=RSA
Vue.prototype.$AES=AES
Vue.prototype.$http=http
Vue.prototype.$wxbase=wxbase

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
