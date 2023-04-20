import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/advanced',
      name: 'advanced',
      component: () => import('../views/AdvancedView.vue')
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('../views/ResultsView.vue')
    },
    {
      path: '/advanced/results',
      name: 'advancedresults',
      component: () => import('../views/AdvancedResultsView.vue')
    },
  ]
})

export default router
