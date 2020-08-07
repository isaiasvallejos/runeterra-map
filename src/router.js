import { createRouter, createWebHashHistory } from 'vue-router'

import Board from './views/Board.vue'
import Create from './views/Create.vue'

export const routerHistory = createWebHashHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    { path: '/', redirect: '/create' },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/board/:id',
      component: Board,
      props: true
    }
  ]
})

export default router
