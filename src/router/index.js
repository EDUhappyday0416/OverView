import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import NotFound from '../views/NotFound.vue'
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
      component: HomeView,
    },
    {
      path: '/news',
      name: 'news',
      // component: News,
      component: () => import('../views/News.vue'),

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
      path: '/HikingRrail',
      name: 'HikingRrail',
      component: () => import('../views/HikingRrail.vue')
    },
    {
      path: '/Mountain',
      name: 'Mountain',
      component: () => import('../views/Mountain.vue')
    },
    {
      path: '/MountainForm',
      name: 'MountainForm',
      component: () => import('../views/MountainForm.vue')
    },
    //路線查詢與介紹
    {
      path: '/RouteWeb',
      name: 'RouteWeb',
      component: () => import('../views/RouteWeb.vue')
    },
    {
      path: '/Map',
      name: 'Map',
      component: () => import('../views/Map.vue')
    },
    {
      path: '/MountainList',
      name: 'MountainList',
      component: () => import('../views/MountainList.vue')
    },
    
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   // component: NotFound
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//   NProgress.start();

//   const token = Cookies.get('token');
//   const whiteList = ['/login', '/register'];

//   if (token) { 
//     if (to.path === "/login") {
//       // next({ path: '/home' });
//       next({ path: '/' });
//       NProgress.done();
//     } else {
//       next();
//     }
//   } else {
//     if (whiteList.includes(to.path)) {
//       next();
//     } else {
//       next({ path: '/login' });
//       NProgress.done();
//     }
//   }
// });
// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   const token = Cookies.get('token');
//   const whiteList = ['/login', '/register'];
//   console.log(token)
//   if (token) {
//     if (to.path === "/login") {
//       next({ path: '/home' });
//       NProgress.done();
//     } else {
//       next();
//     }
//   } else {
//     if (whiteList.includes(to.path)) {
//       next();
//     } else {
//       // next({ path: '/login' });
//       next();
//       NProgress.done();
//     }
//   }
// });

router.afterEach(() => {
  NProgress.done()
});


export default router
