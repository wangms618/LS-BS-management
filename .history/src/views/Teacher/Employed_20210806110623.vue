<template>
  <div class="employed">
    <div class="employTitle">已经就业</div>
    <div class="employContent">
      <el-tabs type="border-card">
        <el-tab-pane label="BAT">
          <el-table :data="tableData" stripe class="tableContent">
            <el-table-column prop="companyName" label="公司名称" width="200">
            </el-table-column>
            <el-table-column prop="studentName" label="学员姓名" width="150">
            </el-table-column>
            <el-table-column prop="salary" label="薪资" width="120">
            </el-table-column>
            <el-table-column
              prop="graduatedSchool"
              label="毕业学校"
              width="180"
            >
            </el-table-column>
            <el-table-column prop="contactDetails" label="联系方式" width="200">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <el-button type="text" size="small">编辑</el-button>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="10K+">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              fixed
              prop="companyName"
              label="公司名称"
              width="150"
            >
            </el-table-column>
            <el-table-column prop="studentName" label="学员姓名" width="120">
            </el-table-column>
            <el-table-column prop="salary" label="薪资" width="120">
            </el-table-column>
            <el-table-column
              prop="graduatedSchool"
              label="毕业学校"
              width="120"
            >
            </el-table-column>
            <el-table-column prop="contactDetails" label="联系方式" width="300">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <el-button type="text" size="small">编辑</el-button>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="footContent">
      <el-pagination
        background
        :page-size="20"
        :pager-count="6"
        layout="prev, pager, next"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          companyName: "2016-05-02",
          studentName: "王小虎",
          salary: "上海市普陀区金沙江路 1518 弄",
          graduatedSchool: "dfd",
          contactDetails: "dsf",
        },
        {
          companyName: "2016-05-02",
          studentName: "王小虎",
          salary: "上海市普陀区金沙江路 1518 弄",
          graduatedSchool: "dfd",
          contactDetails: "dsf",
        },
        {
          companyName: "2016-05-02",
          studentName: "王小虎",
          salary: "上海市普陀区金沙江路 1518 弄",
          graduatedSchool: "dfd",
          contactDetails: "dsf",
        },
        {
          companyName: "2016-05-02",
          studentName: "王小虎",
          salary: "上海市普陀区金沙江路 1518 弄",
          graduatedSchool: "dfd",
          contactDetails: "dsf",
        },
        {
          companyName: "2016-05-02",
          studentName: "王小虎",
          salary: "上海市普陀区金沙江路 1518 弄",
          graduatedSchool: "dfd",
          contactDetails: "dsf",
        },
        {
          companyName: "2016-05-02",
          studentName: "王小虎",
          salary: "上海市普陀区金沙江路 1518 弄",
          graduatedSchool: "dfd",
          contactDetails: "dsf",
        },
        {
          companyName: "2016-05-02",
          studentName: "王小虎",
          salary: "上海市普陀区金沙江路 1518 弄",
          graduatedSchool: "dfd",
          contactDetails: "dsf",
        },
        {
          companyName: "2016-05-02",
          studentName: "王小虎",
          salary: "上海市普陀区金沙江路 1518 弄",
          graduatedSchool: "dfd",
          contactDetails: "dsf",
        },
        {
          companyName: "2016-05-02",
          studentName: "王小虎",
          salary: "上海市普陀区金沙江路 1518 弄",
          graduatedSchool: "dfd",
          contactDetails: "dsf",
        },
        {
          companyName: "2016-05-02",
          studentName: "王小虎",
          salary: "上海市普陀区金沙江路 1518 弄",
          graduatedSchool: "dfd",
          contactDetails: "dsf",
        },
      ],
    };
  },
};
</script>
<style lang='less' scoped>
.employed {
  width: 95%;
}
.employContent {
  margin: 30px auto;
}
</style>