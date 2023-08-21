import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import Cookies from 'js-cookie';

NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/Message.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Item.vue'),
    },
    // {
    //   path: '/OverView',
    //   name: 'OverView',
    //   component: () => import('../views/OverView.vue')
    // },
    {
      path: '/Item',
      name: 'Item',
      component: () => import('../views/Item.vue')
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: () => import('../views/ShoppingCart.vue')
    },
    {
      path: '/ShopItem',
      name: 'ShopItem',
      component: () => import('../views/ShopItem.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = Cookies.get('token');
  const whiteList = ['/login', '/register'];
  console.log(token)
  if (token) {
    if (to.path === "/login") {
      next({ path: '/home' });
      NProgress.done();
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      // next({ name: 'home' });
      next({ path: '/login' });
      NProgress.done();
    }
  }
  // if (to.name !== 'login' && !token) next({ name: 'login' })
  // else next()
});

router.afterEach(() => {
  NProgress.done()
});


export default router
