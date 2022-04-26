import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCookie, removeUserCookie } from '../plugins/cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    remember: '', // 取反无效
    user: getUserCookie(),

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
  },
  modules: {
  },
});
