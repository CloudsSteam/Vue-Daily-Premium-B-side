<template>
  <div class="productAdd-container">
    <a-steps
      class="steps-top"
      :current="current"
    >
      <a-step
        v-for="item in steps"
        :key="item.title"
        :title="item.title"
      />
    </a-steps>
    <div class="steps-content">
      <Basic
        v-if="current===0"
        @next="next"
        :form="form"
      />
      <Sale
        v-else-if="current===1"
        @next="next"
        @prev="prev"
        :form="form"
      />
    </div>
  </div>

</template>
<script>
import Basic from '@/components/basicDetail.vue';
import Sale from '@/components/saleDetail.vue';

import api from '@/api/product';

export default {
  data() {
    return {
      current: 0,
      form: {
        title: '',
        desc: '',
        category: '',
        c_items: [],
        tags: [],
        price: 0,
        price_off: 0,
        unit: '',
        inventory: 0,
        images: [],
      },
      steps: [
        {
          title: '填写商品基本信息',
        },
        {
          title: '填写商品销售信息',
        },
      ],
    };
  },
  components: {
    Basic, Sale,
  },
  created() {
    const { id } = this.$route.params;
    console.log(id);
    if (id) {
      // 读取商品详情
      api.detail(id).then((res) => {
        this.form = res;
      });
    }
  },
  methods: {
    next(form) {
      this.form = {
        ...this.form,
        form,
      };
      if (this.current === 1) {
        //   提交数据
        if (this.$route.params.id) { // 编辑商品
          api.edit(this.form).then((res) => {
            console.log('修改成功', res);
            this.$message.success('修改成功');
            this.$router.push({
              name: 'ProductList',
            });
          });
        } else { // 新增商品
          api.add(this.form).then((res) => {
            console.log('新增成功', res);
            this.$message.success('新增成功');
            this.$router.push({
              name: 'ProductList',
            });
          });
        }
      } else {
        this.current += 1;
      }
    },
    prev() {
      this.current -= 1;
    },
  },
};
</script>
<style lang="less" scoped>
.productAdd-container {
  .steps-top {
    width: 50%;
    margin: 20px auto;
  }
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
}
</style>
