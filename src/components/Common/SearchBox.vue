<template>
  <div class="container">
    <el-collapse>
      <div class="search">
        <span>查找</span>
        <div class="search-box">
          <div class="search-box_left">
            <el-dropdown>
              <span class="el-dropdown-link">
                <slot name="search-category"></slot>
                <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
              </span>
            </el-dropdown>
          </div>
          <div class="search-content">
            <input type="text" class="search-box_input" v-model="searchInfo" />
          </div>
          <div class="search-box_right">
            <el-button icon="el-icon-search" size="mini" circle></el-button>
          </div>
        </div>
      </div>
      <el-collapse-item> 筛选条件 </el-collapse-item>
      <el-row>
        <el-button type="primary">查询</el-button>
        <el-button @click="clearSearch">重置</el-button>
      </el-row>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInfo: "",
    };
  },
  methods: {
    clearSearch() {
      this.searchInfo = "";
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  border-radius: 20px;
  overflow: hidden;
  // box-sizing: border-box;
  background: #fff;
  .el-collapse {
    border-radius: 20px;
    margin: 0 20px;
    position: relative;
    .search {
      margin-left: 20px;
      font-size: 14px;
      position: absolute;
      display: flex;
      height: 49px;
      width: 500px;
      line-height: 49px;
      align-items: center;
      .search-box {
        display: flex;
        margin-left: 20px;
        border: 3px solid #455cfd;
        border-radius: 30px;
        width: 400px;
        height: 28px;
        .search-box_left {
          border-right: 3px solid #8392fd;
          height: 29px;
          .el-dropdown {
            margin-left: 10px;
            margin-right: 10px;
            display: block;
            height: 100%;
            line-height: 30px;
          }
        }
        .search-content {
          height: 26px;
          .search-box_input {
            margin-left: 4px;
            width: 280px;
            height: 100%;
            border: none;
            display: block;
            outline: none;
          }
        }
        .search-box_right {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          .el-button {
            display: block;
          }
        }
      }
    }
    .el-collapse-item {
    }
    .el-row {
      height: 60px;
      position: relative;
      .el-button--primary {
        position: absolute;
        left: 20px;
        top: 10px;
      }
      .el-button--default {
        position: absolute;
        left: 100px;
        top: 10px;
      }
    }
  }
}
</style>