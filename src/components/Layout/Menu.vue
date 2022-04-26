<template>
  <div class="menuList">
    <a-menu
      :default-selected-keys="[defaultSelectKey]"
      :default-open-keys="[defaultOpenKey]"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <template v-for="route in $store.state.roleRouter">
        <a-sub-menu
          v-if="!route.meta.hidden"
          :key="route.name"
        >
          <span slot="title">
            <a-icon :type="route.meta.icon" />
            <span>{{route.meta.title}}</span>
          </span>
          <template v-for="child in route.children">
            <a-menu-item
              v-if="!child.meta.hidden"
              :key="child.name"
            >
              <router-link :to="{name: child.name}">
                <a-icon :type="child.meta.icon" />
                {{child.meta.title}}
              </router-link>

            </a-menu-item>
          </template>

        </a-sub-menu>
      </template>
    </a-menu>

    <!--
    <a-switch
      :checked="theme === 'dark'"
      checked-children="Dark"
      un-checked-children="Light"
      @change="changeTheme"
    /> -->
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     // collapsed: false,
  //   };
  // },
  // methods: {

  // },
  computed: {
    defaultSelectKey: {
      get() {
        return this.$router.currentRoute.matched[1]
          ? this.$router.currentRoute.matched[1].name
          : '';
      },
    },
    defaultOpenKey: {
      get() {
        return this.$router.currentRoute.matched[0].name;
      },
    },
  },
  // watch: {
  //   $route() {
  //     console.log(this.$router);
  //   },
  // },
  // created() {
  //   console.log(this.$router);
  // },
};

</script>
<style lang="less" scoped>
.menuList {
  width: 200px;
  position: fixed;
  height: 100%;
  .ant-menu {
    height: 100%;
  }
}
</style>
