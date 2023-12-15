import { createRouter, createWebHistory } from 'vue-router';
// import DefaultLayout from '@/components/layout/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/layout/DefaultLayout.vue'),
      // component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/menu',
          name: 'menu',
          component: () => import('../views/MenuView.vue')
        },
        {
          path: '/blog',
          name: 'blog',
          component: () => import('../views/BlogView.vue')
        },
        {
          path: '/blog/:id',
          name: 'blogItem',
          component: () => import('../views/BlogItemView.vue'),
          props: true
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue')
        },
        {
          path: '/bookatable',
          name: 'bookatable',
          component: () => import('../views/BookATableView.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  linkExactActiveClass: ['router-link-active']
  // linkActiveClass: ['active']
})

export default router
