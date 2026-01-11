import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/App.vue'),
  },
    {
    path: '/tickets',
    name: 'Tickets',
    component: () => import('@/components/SupportTickets.vue'),
  },
    {
    path: '/home',
    name: 'Home',
    redirect: '/',},
      {
    path: '/tickets/:name',
    name: 'TicketDetailsPage', 
    component: () => import('@/components/TicketDetails.vue'),
  },
]



let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})




export default router
