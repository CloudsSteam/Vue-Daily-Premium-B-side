<template>
  <div class="card">
    <a-list
      :grid="{ gutter: 16, column: 3 }"
      :data-source="data"
    >
      <a-list-item
        slot="renderItem"
        slot-scope="item"
      >
        <a-card :title="item.title">
          Card content
        </a-card>
      </a-list-item>
    </a-list>
  </div>

</template>
<script>
const data = [
  {
    title: '商品总览',
  },
  {
    title: '用户总览',
  },
  {
    title: '销售总览',
  },

];
export default {
  data() {
    return {
      data,
    };
  },
};
</script>
<style lang="less" scoped>
.card {
  margin-top: 50px;
  margin-left: 6px;
}
</style>
