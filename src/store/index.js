import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCookie, removeUserCookie } from '../utils/cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    remember: '', // 取反无效
    user: getUserCookie(),
    roleRouter: {}, // 把路由拼接菜单路一起存储起来
  },
  mutations: {
    setCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    changeRemember(state, remember) {
      state.remember = remember;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo; // 拿到cookie存到user
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
    changeMenuRoutes(state, menuRoutes) {
      state.roleRouter = menuRoutes;
    },
  },
  actions: {
    setCollapsed({ commit }) {
      commit('setCollapsed');
    },
    changeRemember({ commit }, remember) {
      commit('changeRemember', remember);
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo); // 调用提交用户信息到vuex
      setCookie(userInfo); // 存到cookie
    },
    logout({ commit }) {
      commit('logout');
      removeUserCookie();
    },
    changeMenuRoutes({ commit }, menuRoutes) {
      commit('changeMenuRoutes', menuRoutes);
    },
  },
  modules: {
  },
});
