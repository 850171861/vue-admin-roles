import Mock from 'mockjs'

Mock.mock('/superAdmin-mock', 'get', function () {
  const data = [
    {
      path: '/',
      component: '/Dashboard',
      mate: { text: 'Dashboard' }
    },
    {
      path: '/log',
      component: '/Log',
      mate: { text: '查看日志' }
    },
    {
      path: '/system',
      component: '/Article',
      mate: { text: '系统管理' },
      children: [
        {
          path: '/article',
          component: '/Article',
          meta: { text: '文章管理' }
        },
        {
          path: '/comment',
          component: '/Comment',
          meta: { text: '评论管理' }
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
