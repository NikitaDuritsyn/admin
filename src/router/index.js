import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    meta: {layout:'main'},
    component: ()=>import('../views/Main.vue')
  },
  {
    path: '/products',
    name: 'Products',
    meta: {layout:'main'},
    component: ()=>import('../views/Products.vue')
  },
  {
    path: '/orders',
    name: 'Оrders',
    meta: {layout:'main'},
    component: ()=>import('../views/Оrders.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout:'empty'},
    component: ()=>import('../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
