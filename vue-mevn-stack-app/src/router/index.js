import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import ('../components/Home')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import ('../components/About')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import ('../components/Contact')
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: () => import ('../components/Blog')
    },
    {
      path: '/Blogpage',
      name: 'blogpage',
      component: () => import ('../components/Blogpage')
    },
    {
      path: '/Editblog',
      name: 'editblog',
      component: () => import ('../components/Editblog')
    }
  ]
})

