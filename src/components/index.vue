<template>
  <div class="index-container">
    <card />
    <vcharts />
  </div>

</template>
<script>
import card from '@/components/card.vue';
import vcharts from '@/components/vcharts.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    card, vcharts,
  },
};
</script>
<style lang="less" scoped>
</style>
