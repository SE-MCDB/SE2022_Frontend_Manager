<template>
  <div>
    <a-card :bordered="false">
<!--      <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">-->
<!--        <a-list-item slot="renderItem" key="item.title" slot-scope="item">-->
<!--          -->
<!--        </a-list-item>-->
<!--      </a-list>-->
    </a-card>
  </div>
</template>

<script>
import {getExpertAll} from "../../services/expert";

const listData = [];

export default {
  name: "ExpertList",
  data() {
    return {
      loading: true,
      pageIndex: 1,
      data: [],
      //翻页
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      },
      listData,

    }
  },

  mounted() {
    this.init();
  },

  methods: {
    init: async function() {
      this.loadPost();
    },

    loadPost: function () {
      this.loading = true;
      getExpertAll().then((res) => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>

</style>
