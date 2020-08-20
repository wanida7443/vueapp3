import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Customer from '../views/Customer.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import Reports from '../views/Reports.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/customers',
      name: 'Customer',
      component: Customer
    },{
      path: '/products',
      name: 'Products',
      component: Products
    },{
      path: '/reports',
      name: 'Reports',
      component: Reports
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
