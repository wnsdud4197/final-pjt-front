import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import SignupView from '@/pages/SignupView'
import LoginView from '@/pages/LoginView'
import MovieView from '@/pages/MovieView'
import CommunityView from '@/pages/CommunityView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieView,
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityView,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
