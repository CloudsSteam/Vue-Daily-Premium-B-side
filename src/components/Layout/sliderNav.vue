<template>
  <div class="navTop">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-breadcrumb>
      <a-breadcrumb-item>
        首页
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        统计
      </a-breadcrumb-item>
    </a-breadcrumb>

    <ul class="user-info">
      <li>欢迎Cloudsteam
        <a-icon type="down" />
      </li>
      <li>退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style>
</style>
