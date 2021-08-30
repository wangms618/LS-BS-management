<!--
 * @Author: lvEndBack-manager
 * @Date: 2021-08-06 10:43:14
 * @LastEditTime: 2021-08-30 13:11:07
 * @LastEditors: Please set LastEditors
 * @Description: 展示旅梦学员的就业信息 ，管理员和老师有权限修改就业学员信息
 * @FilePath: \lm-bs-management\src\views\Teacher\Employed.vue
-->
<template>
  <div class="employed">
    <div class="header">
      <i class="el-icon-s-check" style="color: #ffd04b"></i>
      <span class="header-title">就业信息</span>
    </div>
    <div class="employContent">
      <el-tabs type="border-card" @tab-click="handleClick">
        <el-tab-pane label="BAT"
          ><salarytable
            :pagesize="pageSize"
            :currentpage="currentPage"
            :tableData="tableData"
          ></salarytable
        ></el-tab-pane>
        <el-tab-pane label="10K+"
          ><salarytable
            :pagesize="pageSize"
            :currentpage="currentPage"
            :tableData="tableData"
          ></salarytable
        ></el-tab-pane>
      </el-tabs>
    </div>
    <!-- 分页器 -->
    <div class="block" style="margin-top: 20px">
      <el-pagination
        align="center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import salarytable from "@/components/Teacher/SalaryTable.vue";
export default {
  data() {
    return {
      tableData: [
        {
          companyName: "百",
          address: "北",
          studentName: "王",
          salary: "200K",
          graduatedSchool: "东华理工",
          contactDetails: "1",
          weChat: "1",
        },
        {
          companyName: "百度",
          address: "北",
          studentName: "王",
          salary: "20K",
          graduatedSchool: "东华",
          contactDetails: "123",
          weChat: "1236",
        },
        {
          companyName: "腾讯",
          address: "上海",
          studentName: "王小虎",
          salary: "200K",
          graduatedSchool: "东华理工大学",
          contactDetails: "123456",
          weChat: "1234546",
        },
        {
          companyName: "百度",
          address: "北京",
          studentName: "王小虎",
          salary: "200K",
          graduatedSchool: "东华理工大学",
          contactDetails: "123456",
          weChat: "1234546",
        },
        {
          companyName: "百度",
          address: "上海",
          studentName: "王小虎",
          salary: "200K",
          graduatedSchool: "东华理工大学",
          contactDetails: "123456",
          weChat: "1234546",
        },
        {
          companyName: "腾讯",
          address: "北京",
          studentName: "王小虎",
          salary: "200K",
          graduatedSchool: "东华理工大学",
          contactDetails: "123456",
          weChat: "1234546",
        },
        {
          companyName: "度",
          address: "北京",
          studentName: "王小虎",
          salary: "2K",
          graduatedSchool: "华东地质学员",
          contactDetails: "1256",
          weChat: "124546",
        },
        {
          companyName: "阿里",
          address: "北京",
          studentName: "小虎",
          salary: "200K",
          graduatedSchool: "华地质学员",
          contactDetails: "123456",
          weChat: "1234546",
        },
        {
          companyName: "度",
          address: "北京",
          studentName: "王虎",
          salary: "200K",
          graduatedSchool: "东华理工大学",
          contactDetails: "1256",
          weChat: "1234546",
        },
        {
          companyName: "百",
          address: "北",
          studentName: "王小",
          salary: "200K",
          graduatedSchool: "东华理工大学",
          contactDetails: "1234",
          weChat: "1234546",
        },
      ],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 5, // 每页的数据条数
    };
  },
  methods: {
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    handleClick(tab, event) {
      console.log(tab.$options.propsData, event);
      console.log(this.activeName);
      this.currentPage = 1;
    },
  },
  components: {
    salarytable,
  },
  mounted() {},
};
</script>
<style lang='less' scoped>
.header {
  .header-title {
    margin-left: 10px;
    font-weight: bold;
  }
}
.el-tabs {
  border-radius: 2px;
}
.employed {
  width: 95%;
  margin: 0 auto;
}
.employContent {
  margin-top: 40px;
}
</style>