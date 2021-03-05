import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Dashboard from '../views/Dashboard.vue'
import Historico from '../views/Historico.vue'
import Ajustes from '../views/Ajustes.vue'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    component: About
     },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/historico',
    name: 'Historico',
    component: Historico
  },
  {
    path: '/ajustes',
    name: 'Ajustes',
    component: Ajustes
  },
  {
    path: '/landingpage',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
