import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/package',
    name: 'package',
    component: () => import('@/views/package-page/PackagePage.vue')
  },
  {
    path: '/package/:id',
    name: 'detail-package',
    component: () => import('@/views/package-page/DetailPackage.vue')
  },
  {
    path: '/form-reservation',
    name: 'form-reservation',
    component: () => import('@/views/FormReservation.vue')
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
        component: () => import('@/views/news/NewsView.vue'),
      },
      {
        path: ":title",
        name: "DetailNewsView",
        component: () => import('@/views/news/DetailNewsView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/dashboard/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('@/layout/DashboardLayout.vue'),
    children: [
      {
        path: "",
        name: 'dashboard',
        component: () => import('@/views/dashboard/DashboardView.vue'),
      },
      {
        path: "package-dashboard",
        name: 'package-dashboard',
        component: () => import('@/views/dashboard/PackageDashboard.vue'),
      },
      {
        path: "contact-dashboard",
        name: 'contact-dashboard',
        component: () => import('@/views/dashboard/ContactDashboard.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
