import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/registration',
    name: 'Registration',
    meta: {layout:'main', auth: true},
    component: ()=>import('../views/Registration.vue')
  },
  {
    path: '/main',
    name: 'Main',
    meta: {layout:'main', auth: true},
    component: ()=>import('../views/Main.vue')
  },
  {
    path: '/products',
    name: 'Products',
    meta: {layout:'main', auth: true},
    component: ()=>import('../views/Products.vue')
  },
  {
    path: '/createProducts',
    name: 'createProducts',
    meta: {layout:'main', auth: true},
    component: ()=>import('../views/CreateProducts.vue')
  },
  {
    path: '/orders',
    name: 'Оrders',
    meta: {layout:'main', auth: true},
    component: ()=>import('../views/Оrders.vue')
  },
  {
    path: '/reviews',
    name: 'Reviews',
    meta: {layout:'main', auth: true},
    component: ()=>import('../views/Reviews.vue')
  },
  {
    path: '/',
    name: 'Login',
    meta: {layout:'empty'},
    component: ()=>import('../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const requireUser = to.matched.some(record => record.meta.auth)
  // console.log(token)
  if (requireUser && !token ){
    next('/')
  }
  else next()
})

export default router
