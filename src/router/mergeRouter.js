import router from '@/router'
import Store from '@/store'

const files = file => () => import('@/views' + file + '.vue')

let getRouter // 存储后台路由

router.beforeEach((to, from, next) => {
  //  从Vuex中获取角色路由权限
  if (Store.state.router && Store.state.menuRouter.length > 0) {
    if (!getRouter) { // 判断有没有路由权限, 没有路由权限 重新请求|从Vuex中获取
      getRouter = Store.state.menuRouter// 拿到路由
      routerGo(to, next)// 调用动态添加路由的方法
    } else { // 判断有没有路由列表 有 允许进入下个这里是第二个beforeEach
      next()
    }
  } else { // 判断 数据vue中有没有路由权限, 没有返回的login页面
    next()
  }
})

function routerGo(to, next) {
  // 过滤路由 调用filterRouter 数据模板处理方法 返回Vue-router可以识别数据
  getRouter = filterRouter(getRouter)
  // 动态添加所有的的路由
  router.addRoutes(getRouter)
  // 态添加的路由加载完毕，在跳转
  next({ ...to, replace: true })
}

function filterRouter(routerMap) {
  // 遍历动态路由
  const dynamicRouters = routerMap.filter(route => {
    // 修改动态路由的component
    if (route.component) {
      route.component = files(route.component)
    }
    // 判断当前的路由对象中是否含有children 有再次修改动态路由的component
    if (route.children && route.children.length) {
      route.children = filterRouter(route.children)
    }
    return true
  })
  Store.commit('setRouter', Store.state.menuRouter) // 后台返回的路由 保存在Vuex中
  return dynamicRouters
}
