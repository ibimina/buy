import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import ProductsView from '../views/ProductsView.vue'
import { store } from "../store/store.js"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      meta: { auth: true }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { auth: false }

    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: { auth: true }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
      meta: { auth: true }
    },
    {
      path: '/category/:category',
      name: 'category',
      component: () => import('../views/CategoryView.vue'),
      meta: { auth: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
      meta: { auth: false }
    },
  
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      meta: { auth: true }
    },
   
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})


router.beforeEach(async (to, from, next) => {
  if ('auth' in to.meta && to.meta.auth && store.state.authIsReady !== true) {
    next('/login')
  } else if ('auth' in to.meta && !to.meta.auth && store.state.authIsReady) {
    next('/products')
  } else {
    next()
  }
})
export default router
