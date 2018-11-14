import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home.vue'

Vue.use(Router)

 const router =new Router({
  routes: [
    {
      path: '/gushici/:id',
      name: 'GuShiCi',
      component: () => import('@/views/GuShiCi.vue'),
      meta: { title: '古诗词' }
    },
    {
      path: '/dengmi',
      name: 'Dengmi',
      component: () => import( '@/views/Dengmi.vue'),
      meta: { title: '灯谜' }
    },
    {
      path: '/xiehouyu',
      name: 'XieHouYu',
      component: () => import( '@/views/XieHouYu.vue'),
      meta: { title: '歇后语' }
    },
    {
      path: '/gateWay/:p',
      name: 'gateWay',
      component: () => import('@/views/gateWay'),
      meta: { title: '' }
    }
  ]
})

// 全局 before 钩子
router.beforeEach((to, from, next) => {
  // scroll to top
  window.scrollTo(0, 0)
  // 设置网页title
  document.title = to.meta.title
  next()
})
export default router