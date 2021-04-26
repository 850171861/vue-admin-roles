import router from '@/router'
import Store from '@/store'
import main from '../components/main.vue'
import publicRouter from './publicRouter'
const files = file => () => import('@/views' + file + '.vue')

let getRouter // 存储后台路由
router.beforeEach((to, from, next) => {
  // 从Vuex中获取角色路由权限
  if (Store.state.menuRouter.length > 0) {
    if (typeof getRouter === 'undefined') { // 判断是否有存储路由,没有从Vuex中获取
      // 公开路由合并后台路由，并调用filterRouter函数修改为符合vue-router的引入文件方式
      getRouter = filterRouter(publicRouter.concat(Store.state.menuRouter))
      // 动态添加所有的的路由
      router.addRoutes(getRouter)
      // 态添加的路由加载完毕，在跳转
      next({ ...to, replace: true })
    } else {
      next()
    }
  } else { // 数据vuex中没有后端路由, 就返回的login页面
    next()
  }
})

function filterRouter(routerMap) {
  // 遍历动态路由
  const dynamicRouters = routerMap.filter(route => {
    if (route.component === 'main') {
      route.component = main
    } else { // 修改动态路由的component
      route.component = files(route.component)
    }
    // 判断当前的路由对象中是否含有children 有再次修改动态路由的component
    if (route.children && route.children.length) {
      route.children = filterRouter(route.children)
    }
    return true
  })
  return dynamicRouters
}
