import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/currencyconverter',
    name: 'Conversor de moedas',
    component: () => import(/* webpackChunkName: "currencyconverter" */ '../views/CurrencyConverter.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
