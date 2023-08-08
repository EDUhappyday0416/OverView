import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import Cookies from 'js-cookie';

NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Item.vue')
    },
    {
      path: '/OverView',
      name: 'OverView',
      component: () => import('../views/OverView.vue')
    },
    {
      path: '/Item',
      name: 'Item',
      component: () => import('../views/Item.vue')
    },
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = Cookies.get('token');
  // 白名單路由列表
  const whiteList = ['/login', '/register'];

  if (token) {
    if (to.path === "/login") {
      next({ path: '/about' });
      NProgress.done();
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login");
      NProgress.done();
    }
  }
  // if (to.path == '/login') {
  //   if (token) {
  //     next({ path: '/About' });
  //   } else {
  //     next();
  //   }
  // } else {
  //   // 如果不是 /login，判断是否有 token
  //   if (!token) {
  //     // 如果没有，则跳至登录页面
  //     next({ path: '/login' });
  //     console.log('9999999');
  //   } else {
  //     // 如果有 token，且不在登录页面，则继续执行或重定向到 OverView（根据您的需求）
  //     console.log('66666');
  //     next();  // 只是继续执行
  //     // next({ path: '/About' });  // 如果想要每次检测到 token 就重定向到 OverView
  //   }
  // }
});

router.afterEach(() => {
  NProgress.done()
});


export default router
