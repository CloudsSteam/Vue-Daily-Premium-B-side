<template>
  <div class="navTop">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>
          {{currentRoute[0] ? currentRoute[0].meta.title: ''}}
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link :to="{name: currentRoute[1].name}">
            {{currentRoute[1] ? currentRoute[1].meta.title: ''}}
          </router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <ul class="user-info">
      <li>{{this.$store.state.user.username}}
        <a-icon type="down" />
      </li>
      <li
        class="exit"
        @click="cancelLogin"
      >退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // collapsed: false,
      currentRoute: this.$router.currentRoute.matched, // 简写
    };
  },
  // mounted: {

  // },
  watch: {
    $route() {
      this.currentRoute = this.$router.currentRoute.matched; // 路由更新重新渲染
      console.log(this.$router);
    },
  },
  methods: {
    toggleCollapsed() {
      // this.collapsed = !this.collapsed;

      this.$store.dispatch('setCollapsed');
    },
    cancelLogin() {
      this.$store.dispatch('logout');
      this.$router.push({
        name: 'Login',
      });
    },
  },
};
</script>

<style lang="less" scoped>
.user-info {
  position: fixed;
  right: 0;
  top: 0px;
  // .exit {
  //   position: absolute;
  //   bottom: -50px;
  //   right: 30px;
  // }
}
</style>
