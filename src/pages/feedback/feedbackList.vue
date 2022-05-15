<template>
  <a-card :bordered="false">
    <a-table :data-source="data" :columns="columns">
      <template #expandedRowRender="record,index" class="ant-table-thead">
        <p style="margin: 0">
          {{ record.description }}
        </p>
      </template>
    </a-table>
  </a-card>
</template>

<script>
import {getFeedbackAll} from "../../services/feedback";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    scopedSlots: { customRender: "name" },
    width: 100,

  },
  {
    title: "性别",
    dataIndex: "sex",
    scopedSlots: { customRender: "sex" },
    width: 100
  },
  {
    title: "邮箱",
    dataIndex: "email",
    scopedSlots: { customRender: "email" },
    width: 150
  },
  {
    title: "问题类型",
    dataIndex: "qtype",
    scopedSlots: { customRender: "qtype" },
    width: 150
  },
  {
    title: "发布时间",
    dataIndex: "datatime",
    scopedSlots: { customRender: "datatime" },
    width: 150
  },
];
const data = [];

export default {
  name: "feedbackList",
  data() {
    return {
      data,
      columns,

    }
  },
  mounted() {
    this.init();
  },

  methods: {
    init: async function() {
      this.loadNeed();
    },
    loadNeed: function () {
      data.length = 0;
      getFeedbackAll().then((res)=>{
        console.log(res);
        let d = res.data.data;
        console.log(d);
        for (let i = 0; i < d.length; i++) {
          data.push({
            name: d[i].name,
            email: d[i].email,
            sex: d[i].sex,
            qtype: d[i].qtype,
            description: d[i].description,
            datatime: d[i].datatime
          })
        }
      }).catch((error) => {
        console.log(error);
      })
    },
  }
}
</script>

<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
.editable-row-operations a {
  margin-right: 8px;
}
</style>
