import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/scans',
      name: 'scans',
      component: () => import('../views/Scans.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/ai-analysis',
      name: 'ai-analysis',
      component: () => import('../views/AIAnalysis.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/consultation',
      name: 'consultation',
      component: () => import('../views/Consultation.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/emergency',
      name: 'emergency',
      component: () => import('../views/Emergency.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/Resources.vue')
    }
  ]
})

export default router