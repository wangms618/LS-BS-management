// 书籍推荐
<template>
  <div class="container">
    <div class="table">
      <div class="table-name"><span>书名</span></div>
      <div class="table-author"><span>作者</span></div>
      <div class="table-link"><span>链接</span></div>
    </div>
    <div class="books-box">
      <div class="books" v-for="item in books" :key="item.id">
        <div class="books-name">
          <span>{{ item.name }}</span>
        </div>
        <div class="books-author">
          <span>{{ item.author }}</span>
        </div>
        <div class="books-link">
          <el-link type="primary" :href="item.links">链接</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          name: "你不知道的javascirpt上卷1",
          author:'KYLE SIMPSON',
          links: "https://leetcode-cn.com/",
          id: 18230,
        },
        {
          name: "你不知道的javascirpt上卷2",
          author:'KYLE SIMPSON',
          links: "https://leetcode-cn.com/",
          id: 18321231,
        },
        {
          name: "你不知道的javascirpt上卷3",
          author:'KYLE SIMPSON',
          links: "https://leetcode-cn.com/",
          id: 18321326,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.container {
  height: 500px;
  .table {
    width: 100%;
    height: 30px;
    display: flex;
    border-bottom: 1px solid rgb(228, 231, 237);
    .table-author {
      width: 15%;
      height: 100%;
      text-align: center;
    }
    .table-name {
      width: 30%;
      text-align: center;
    }
    .table-link {
      flex: 1;
      text-align: center;
    }
  }
  .books-box {
    height: 420px;
    overflow-y: scroll;
    .books {
      width: 100%;
      height: 140px;
      border-bottom: 1px solid rgb(228, 231, 237);
      display: flex;
      .books-author {
        width: 15%;
        // height: 140px;
        display: flex;
        span {
          margin: auto;
        }
      }
      .books-name {
        width: 30%;
        display: flex;
        span {
          margin: auto;
        }
      }
      .books-link {
        flex: 1;
        display: flex;
        .el-link {
          margin: auto;
        }
      }
    }
  }
}
</style>