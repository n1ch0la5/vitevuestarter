import { createWebHistory, createRouter } from 'vue-router'

// import Home from '../views/Home.vue'
// import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
// import Init from '../views/Init.vue'

const routes = [
  { path: '/', component: Home, name: 'start' },
  // { path: '/start', component: Home, name: 'home' },
  // { path: '/login', component: Login, name: 'login' },
]

 export const router = createRouter({
  history: createWebHistory(),
  routes,
})