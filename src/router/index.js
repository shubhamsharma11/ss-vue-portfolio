import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    // Education
    {
      name: 'Education',
      path: '/education',
      component: () => import('@/pages/EducationPage.vue'),
    },
    // Experience
    {
      name: 'Experience',
      path: '/experience',
      component: () => import('@/pages/ExperiencePage.vue'),
    },
    // Project
    {
      name: 'Project',
      path: '/projects',
      component: () => import('@/pages/ProjectPage.vue'),
    },
    // Contact
    {
      name: 'Contact',
      path: '/contact',
      component: () => import('@/pages/ContactPage.vue'),
    },
  ],
})

export default router
