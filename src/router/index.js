import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import SignupView from '@/pages/SignupView'
import LoginView from '@/pages/LoginView'
import MovieView from '@/pages/MovieView'
import RecommendView from '@/pages/RecommendView'
import CommunityView from '@/pages/CommunityView'
import ProfileView from '@/pages/ProfileView'

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
    path: '/recommend',
    name: 'recommend',
    component: RecommendView,
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
