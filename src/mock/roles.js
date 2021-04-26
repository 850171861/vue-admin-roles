import Mock from 'mockjs'

// 超级管理员
Mock.mock('/superAdmin-mock', 'get', function () {
  const data = [
    {
      path: '/',
      component: '/Dashboard',
      meta: { title: 'Dashboard', icon: 'pie-chart' }
    },
    {
      path: '/log',
      component: '/Log',
      meta: { title: '查看日志', icon: 'save' }
    },
    {
      path: '/user',
      component: '/User',
      meta: { title: '用户管理', icon: 'user' }
    },
    {
      path: '/system',
      component: 'main',
      meta: { title: '系统管理', icon: 'alert' },
      children: [
        {
          path: '/system/article',
          component: '/Article',
          meta: { title: '文章管理' }
        },
        {
          path: '/system/comment',
          component: '/Comment',
          meta: { title: '评论管理' }
        }
      ]
    }
  ]

  return {
    code: 0,
    msg: '超级管理员',
    data: data
  }
})

// 普通管理员
Mock.mock('/commonAdmin-mock', 'get', function () {
  const data = [
    {
      path: '/',
      component: '/Dashboard',
      meta: { title: 'Dashboard', icon: 'pie-chart' }
    },
    {
      path: '/system',
      component: 'main',
      meta: { title: '系统管理', icon: 'alert' },
      children: [
        {
          path: '/system/article',
          component: '/Article',
          meta: { title: '文章管理' }
        },
        {
          path: '/system/comment',
          component: '/Comment',
          meta: { title: '评论管理' }
        }
      ]
    }
  ]

  return {
    code: 0,
    msg: '普通管理员',
    data: data
  }
})
