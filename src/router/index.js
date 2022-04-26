import Vue from 'vue';
import VueRouter from 'vue-router';
import getMenuRoute from '@/utils/permissionsRouter';
import Home from '../views/Home.vue';
import store from '../store/index';

Vue.use(VueRouter);

const ayncRouterMap = [{
  path: '/product',
  name: 'Product',
  meta: {
    title: '商品',
    icon: 'inbox',
    hidden: false,
  },
  component: Home,
  children: [
    {
      path: 'list',
      name: 'ProductList',
      meta: {
        title: '商品列表',
        icon: 'unordered-list',
        hidden: false,
      },
      component: () => import('@/views/productList.vue'),
    },
    {
      path: 'add',
      name: 'ProductAdd',
      meta: {
        title: '添加商品',
        icon: 'file-add',
        hidden: false,
      },
      component: () => import('@/views/productAdd.vue'),
    },
    {
      path: 'edit/:id',
      name: 'ProductEdit',
      meta: {
        title: '编辑商品',
        icon: 'file-add',
        hidden: true,
      },
      component: () => import('@/views/productAdd.vue'),
    },
    {
      path: 'category',
      name: 'Category',
      meta: {
        title: '类目管理',
        icon: 'project',
        hidden: false,
      },
      component: () => import('@/views/category.vue'),
    },
  ],
}];

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      hidden: false,
      icon: 'home',
    },
    component: Home,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'Index',
      meta: {
        title: '统计',
        icon: 'stock',
        hidden: false,
      },
      component: () => import('../components/index.vue'),
    }],
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登入', hidden: true },
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
    if (store.state.user.appkey
      && store.state.user.username
      && store.state.user.role) { // vuex中是否有user
      // && store.state.remember  if (!store.state.number) { // 是否记住登入,逻辑有问题拦截不了

      if (!isAddRoutes) {
        const menuRoutes = getMenuRoute(store.state.user.role, ayncRouterMap);
        // 根据权限map映射把ayncRouterMap筛选成对应角色菜单路由
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes)).then(() => {
          // 把路由拼接新的菜单路由存储到vuex
          // for (const x of menuRoutes) {
          //   router.addRoute(x);
          // }
          router.addRoute(...menuRoutes);
          // 异步完成后菜单路由方法添加到router中渲染
          next();
        });
        isAddRoutes = true;
      }

      // }
      return next();
    }
    return next('/login');
  }
  return next();
});

export default router;
