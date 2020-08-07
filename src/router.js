import { createRouter, createWebHistory } from 'vue-router'

import Board from './views/Board.vue'
import Create from './views/Create.vue'

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    { path: '/', redirect: '/br/create' },
    {
      path: '/:language/create',
      component: Create
    },
    {
      path: '/:language/board/:id',
      component: Board,
      props: true
    },
    { path: '/:catchAll(.*)', redirect: '/' }
  ]
})

export default router
