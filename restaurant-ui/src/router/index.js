import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/layout/DefaultLayout.vue'),
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
          path: '/pages',
          name: 'pages',
          component: () => import('../views/PagesView.vue')
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
  // linkActiveClass: ['active']
})

export default router
