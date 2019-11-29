import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/email-list',
    name: 'Email List',
    component: () => import('../views/ListMail.vue')
  },
  {
    path: '/campaign',
    name: 'Campaign',
    component: () => import('../views/Campaign.vue')
  },
  {
    path: '/campaign/create',
    name: 'Create New Campaign',
    component: () => import('../views/CreateCampaign.vue')
  },
  {
    path: '/campaign/edit',
    name: 'Edit Campaign',
    component: () => import('../views/EditCampaign.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
