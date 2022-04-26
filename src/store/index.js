import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCookie, removeUserCookie } from '../plugins/cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    user: getUserCookie(),

  },
  mutations: {
    setCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    setCollapsed({ commit }) {
      commit('setCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo); // 调用提交用户信息到vuex
      setCookie(userInfo);
    },
    logout({ commit }) {
      commit('logout');
      removeUserCookie();
    },
  },
  modules: {
  },
});
