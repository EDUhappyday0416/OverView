import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import NProgress from "nprogress"
import "nprogress/nprogress.css"

NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Item.vue'),
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
// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   const token = Cookies.get('token');
//   const whiteList = ['/login', '/register'];

//   if (token) {
//     if (to.path === "/login") {
//       next({ path: '/about' });
//       NProgress.done();
//     } else {
//       next();
//     }
//   } else {
//     if (whiteList.includes(to.path)) {
//       next();
//     } else {
//       next("/login");
//       NProgress.done();
//     }
//   }
// });

router.afterEach(() => {
  NProgress.done()
});


export default router
