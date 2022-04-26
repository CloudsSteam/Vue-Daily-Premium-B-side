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
          首页
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          统计
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <ul class="user-info">
      <li>欢迎Cloudsteam
        <a-icon type="down" />
      </li>
      <li @click="cancelLogin">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // collapsed: false,
    };
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
</style>
