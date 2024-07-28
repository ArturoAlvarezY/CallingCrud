import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
/* import LoginComponent from '../components/login/Login.vue'
 */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/Support.vue')
    },
    {
      path: '/request',
      name: 'request',
      component: () => import('../views/Request.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/Edit.vue')
    }

  ]
})

export default router
