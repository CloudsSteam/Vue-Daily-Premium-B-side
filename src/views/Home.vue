<template>
  <div class="home">
    <Menu class="menu" />
    <div class="main-container">
      <sliderNav />
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Menu from '../components/Layout/Menu.vue';
import sliderNav from '../components/Layout/sliderNav.vue';

export default {
  components: {
    Menu,
    sliderNav,
  },
};
</script>

<style lang="less">
.home {
  // position: relative;

  .main-container {
    margin-left: 200px;
  }
}
</style>
