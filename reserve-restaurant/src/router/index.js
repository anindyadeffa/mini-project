import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/form-reservation',
    name: 'form-reservation',
    component: () => import('@/views/FormReservation.vue')
  },
  {
    path: '/completed',
    name: 'completed',
    component: () => import('@/views/CompletedView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/news',
    component: () => import('@/layout/NewsLayout.vue'),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "",
        name: "News",
        component: () => import('@/views/NewsView.vue'),
      },
      {
        path: ":title",
        name: "DetailNewsView",
        component: () => import('@/views/DetailNewsView.vue'),
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
