import { createRouter, createWebHistory } from '@ionic/vue-router';
import Memories from '../pages/MemoriesPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/memories',
    component: Memories
  },
  {
    path: '/memories/:id',
    component: () => import('@/pages/MemoriesDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
