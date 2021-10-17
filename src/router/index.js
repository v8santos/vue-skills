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
  },
  {
    path: '/calculator',
    name: 'Calculadora',
    component: () => import(/* webpackChunkName: "calculator" */ '../views/Calculator.vue')
  },
  {
    path: '/crud',
    name: 'CRUD',
    component: () => import(/* webpackChunkName: "crud" */ '../views/Crud.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
