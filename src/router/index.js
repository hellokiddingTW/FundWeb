import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect:'/intro',
    children:[
      {
        path: 'intro' ,
        name: 'intro' ,
        component:() => import('../components/pages/Intro')
      },
      {
        path: 'FAQ' ,
        name: 'FAQ' ,
        component:() => import('../components/pages/FAQ')
      },
      {
        path: 'progress' ,
        name: 'progress' ,
        component:() => import('../components/pages/Progress')
      },{
        path: 'message' ,
        name: 'message' ,
        component:() => import('../components/pages/Message')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
