import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Singup from '../views/SignUp.vue'
import Welcome from '../views/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Singup
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    }

  ]
})

export default router
