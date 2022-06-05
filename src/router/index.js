import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodosView from '../views/TodosView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import OneTodoView from '../views/OneTodoView.vue'
import DoneView from '../views/DoneView.vue'




import {auth} from "@/firebaseConfig.js"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo/:id',
    name: 'todoView',
    component: OneTodoView,
    props: true
  },
  {
    path: '/todos',
    name: 'todos',
    meta: { // connects with the function later in this file.
      requiresAuth: true
    },
    component: TodosView,
    props: true
  },
  {
    path: '/done',
    name: 'done',
    meta: { // connects with the function later in this file.
      requiresAuth: true
    },
    component: DoneView,
    props: true
  },
  {
    path: '*',
    name: '404',
    component: NotFoundView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/')
    // could also just fire off a redirect login here, or redirect based on a meta property!
  } else {
    next()
  }
})
export default router
