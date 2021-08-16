<template>
  <div class="container">
    <el-table :data="tableData" stripe style="width: 100%" height="450">
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="content" label="内容" width="180">
      </el-table-column>
      <el-table-column prop="pushDate" label="发布日期"> </el-table-column>
      <el-table-column prop="pushBy" label="发布人"> </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <!-- 拿到对应行的对象 -->
          <el-button size="small" @click.stop="changeNotification(scope.row)">修改</el-button>
          <el-button
            type="danger"
            size="small"
            @click.stop="deleteNotification(scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="add-notice">
      <el-button type="primary" size="medium" @click="addNotification">添加公告</el-button>
    </div>
  </div>
</template>

<script>
import { NoticeMixin } from '@/common/js/mixin.js'
export default {
  mixins:[NoticeMixin],
  data() {
    return {
      tableData: [
        {
          title: "周日LOL1",
          content: "网吧五连坐",
          pushDate: "2021/8/7",
          pushBy: "王**",
        },
        {
          title: "周日LOL2",
          content: "网吧五连坐",
          pushDate: "2021/8/7",
          pushBy: "刘**",
        },
        {
          title: "周日LOL3",
          content: "网吧五连坐",
          pushDate: "2021/8/7",
          pushBy: "游**",
        },
        {
          title: "周日LOL4",
          content: "网吧五连坐",
          pushDate: "2021/8/7",
          pushBy: "郭**",
        },
      ],
    };
  },
  methods:{
    // 添加
    // 修改
    // 删除
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 500px;
  .add-notice {
    margin-top: 10px;
    .el-button {
      float: right;
    }
  }
}
</style>