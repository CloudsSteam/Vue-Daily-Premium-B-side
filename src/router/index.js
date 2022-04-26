import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [{
      path: 'index',
      component: () => import('../components/index.vue'),
    }],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

let isAddRoutes = false;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.role) {
      if (!isAddRoutes) {
        // const menuRoutes = getMenuRoutes(store.state.user.role, ayncRouterMap);
        // store.dispatch('changeMenuRoutes', routes.concat(menuRoutes)).then(() => {
        //   router.addRoutes(menuRoutes);
        //   next();
        // });
        isAddRoutes = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});

export default router;
