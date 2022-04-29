<template>
  <div class="home">
    <Menu class="menu" />
    <div :class="{'main-container':true,'systolic':$store.state.collapsed}">
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
    transition: all 0.3s;
    // width: calc(100% - 200px);
    // width: 89%;
    overflow-x: hidden;
    margin-left: 200px;
    &.systolic {
      margin-left: 80px;
    }
    .navTop {
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
      border-bottom: 1px solid #eee;
      .breadcrumb {
        display: inline-block;
        margin-left: 20px;
      }
      .user-info {
        // float: right;
        cursor: pointer;
        text-align: center;
        li {
          padding: 0 40px;
        }
        li:not(:first-child) {
          display: none;
          &:hover {
            background-color: #eee;
            color: #999;
            // font-weight: bold;
          }
        }
        &:hover {
          li {
            display: block;
            // z-index: 5;
          }
        }
      }
    }
  }
}
</style>
