import { createRouter, createWebHistory } from 'vue-router'
import WelcomeScreen from '../views/WelcomeScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeScreen,
    },
  ],
})

export default router
