<template>
  <div>
  <p style="margin: 0;background-color: lightgoldenrodyellow;font-size: 14px">相关订单：</p>
  <a-table :columns="OrderColumns" :data-source="OrderData"
           :pagination="false" style="background-color: lightgoldenrodyellow">

  </a-table>
  </div>
</template>

<script>
export default {
  name: "ChildForm",
  props:{
    OrderColumns: {
      type: Array,
      default: ''
    },
    OrderData: {
      type: Array,
      default: ''
    },
    showExpandColumn: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
/deep/ .ant-table-thead > tr > th{
  background-color: lightgoldenrodyellow !important;
}
</style>
