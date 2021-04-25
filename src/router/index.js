import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '@/store'

import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      showSideMenu: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    // 登录状态是false 路由重新定向跳转到登录页
    if (!Store.state.isLogin) {
      next('/login')
    } else { // 用户登录了 允许通过
      next()
    }
  }
})

export default router
