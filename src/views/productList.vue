<template>
  <div class="productList-container">
    <Search
      :data="categoryList"
      @submit="searchSubmit"
    />

    <a-button class="product-add-btn">
      <router-link :to="{name: 'ProductAdd'}">添加商品</router-link>
    </a-button>
    <Table
      :data="tableData"
      :page="page"
      @change="changePage"
      :categoryList="categoryList"
    />
  </div>
</template>

<script>
import Search from '@/components/from.vue';
import Table from '@/components/productsTable.vue';
import product from '@/api/product';
import CategoryApi from '@/api/category';

export default {
  data() {
    return {
      categoryList: [],
      tableData: [],
      searchForm: {},
      page: {
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        total: 1,
      },
      categoryObj: {},
    };
  },
  components: {
    Search,
    Table,
  },
  async created() {
    await CategoryApi.list().then((res) => {
      this.categoryList = res.data;
      res.data.forEach((item) => {
        this.categoryObj[item.id] = item;
      });
    });
    this.getTableData();
  },
  methods: {
    searchSubmit(from) {
      this.searchForm = from;
      this.getTableData();
    },
    getTableData() {
      product.list({
        page: this.page.current,
        size: this.page.pageSize,
        ...this.searchForm,
      }).then((res) => {
        // console.log(res.data);
        this.page.total = res.total;

        this.tableData = res.data.map((item) => ({
          ...item,
          categoryName: this.categoryObj[item.category].name,
        }));
        // console.log(this.tableData);
      });
    },
    changePage(page) {
      // console.log(page);
      this.page = page;
      this.getTableData();
    },
  },
};
</script>

<style lang="less" scoped>
.productList-container {
  // padding-top: 30px;
  position: relative;
  .product-add-btn {
    position: absolute;
    right: 35px;
    top: 14px;
  }
}
</style>
