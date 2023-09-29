import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Singup from '../views/SignUp.vue'
import Welcome from '../views/Welcome.vue'
import Profile from '../views/Profile.vue'
import Prices from '../views/Prices.vue'
import AboutUs from '../views/AboutUs.vue'
import Schedule from '../views/Schedule.vue'
import Trainings from '../views/Trainings.vue'
import Clubs from '../views/Clubs.vue'
import ForgotPassword from '../views/Forgot-Password.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/prices',
      name: 'prices',
      component: Prices
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/trainings',
      name: 'trainings',
      component: Trainings
    },
    {
      path: '/clubs',
      name: 'clubs',
      component: Clubs
    },+
    {
      path: '/forgot-password',
      name: 'forgot',
      component: ForgotPassword
    },
  ]
})

export default router
