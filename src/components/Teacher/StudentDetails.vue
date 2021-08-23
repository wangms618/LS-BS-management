<!--
 * @Author: your name
 * @Date: 2021-08-15 17:15:34
 * @LastEditTime: 2021-08-16 08:48:13
 * @LastEditors: Please set LastEditors
 * @Description: 表格点击详情弹出框
 * @FilePath: \lm-bs-management\src\components\Teacher\StudentDetails.vue
-->

<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="140" align="center">
      </el-table-column>
      <el-table-column
        prop="leetcode"
        label="leetcode题目"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="jueJin" label="掘金文章" align="center">
      </el-table-column>
      <el-table-column
        prop="leetcodeQuestion"
        label="leetcode刷题"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="githubRelease"
        label="github发布"
        width="180"
        align="center"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "王小虎",
          leetcode: "三数球会人",
          jueJin: "10篇",
          leetcodeQuestion: "10题目",
          githubRelease: "210次",
        },
      ],
    };
  },
};
</script>

<style>
.el-message-box {
  width: 60%;
}
</style>