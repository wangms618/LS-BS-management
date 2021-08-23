<!--
 * @Author: your name
 * @Date: 2021-08-12 15:48:10
 * @LastEditTime: 2021-08-23 21:24:28
 * @LastEditors: Please set LastEditors
 * @Description: 工资表格
 * @FilePath: \lm-bs-management\src\components\Teacher\SalaryTable.vue
-->

<template>
  <el-table
    :data="
      tableData.slice((currentpage - 1) * pagesize, currentpage * pagesize)
    "
    :default-sort="{ prop: 'date', order: 'descending' }"
    style="width: 100%"
    stripe
  >
    <el-table-column
      prop="companyName"
      label="公司名称"
      sortable
      align="center"
      width="120"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      sortable
      label="城市"
      width="140"
    >
    </el-table-column>
    <el-table-column prop="studentName" align="center" label="学员姓名">
    </el-table-column>
    <el-table-column prop="salary" align="center" label="薪资" width="140">
    </el-table-column>
    <el-table-column
      prop="graduatedSchool"
      label="毕业学校"
      sortable
      align="center"
      width="250"
    >
    </el-table-column>
    <el-table-column
      prop="contactDetails"
      align="center"
      label="联系方式"
      width="200"
    >
    </el-table-column>
    <el-table-column prop="weChat" align="center" label="微信" width="200">
    </el-table-column>
    <el-table-column label="操作">
      <el-button
        type="text"
        align="right"
        size="small"
        @click="changeSalary(item)"
        >编辑</el-button
      >
    </el-table-column>
  </el-table>
</template>

<script>
import { salaryMixin } from "@/common/js/mixin.js";
export default {
  mixins: [salaryMixin],
  data() {
    return {
      // pagesize: 5,
      // currentpage: 1,
    };
  },
  props: {
    currentpage: {
      typeof: Number,
    },
    pagesize: {
      typeof: Number,
    },
    tableData: {
      typeof: Array,
    },
  },
  mounted() {
    //打印父组件实例
    console.log(this.$parent);
  },
};
</script>

<style>
</style>