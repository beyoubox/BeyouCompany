import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/mobile/HelloWorld'
import Home from '@/components/mobile/home.vue'
import Specification from '@/components/mobile/specification.vue'
import Chain from '@/components/mobile/chain.vue'
import Roots from '@/components/mobile/roots.vue'
import About from '@/components/mobile/about.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/chain',
      name: 'Chain',
      component: Chain
    },{
      path: '/specification',
      name: 'Specification',
      component: Specification
    }, {
      path: '/roots',
      name: 'Roots',
      component: Roots
    }, {
      path: '/about',
      name: About,
      component: About
    }
  ],
  linkExactActiveClass: 'active'
})

/**
 * 验证
 */
router.beforeEach((to, from, next) => {
  if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/p_index.html#/'
    return
  }
  next()
})

export default router
