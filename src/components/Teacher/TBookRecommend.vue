<template>
  <div class="container">
    <div class="table">
      <div class="table-pic"><sapn>封面</sapn></div>
      <div class="table-name"><span>书名</span></div>
      <div class="table-link"><span>链接</span></div>
      <div class="table-button"><span>操作</span></div>
    </div>
    <div class="books-box">
      <div class="books" v-for="item in books" :key="item.id">
        <div class="books-pic">
          <!-- <img src="../../assets/img/dontKnowJS.jpg" alt=""> -->
          <el-image
            style="width: 100px; height: 100px"
            :src="item.imgUrl"
            fit="scale-down"
            :preview-src-list="imgList"
          ></el-image>
        </div>
        <div class="books-name">
          <span>{{ item.name }}</span>
        </div>
        <div class="books-link">
          <el-link type="primary" :href="item.link">链接</el-link>
        </div>
        <div class="books-button">
          <div class="buttons">
            <el-button size="small" @click="changeBooks(item)"
              >修改</el-button
            >
            <el-button size="small" type="danger" @click="deleteBooks(item.id)"
              >删除</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="add-books">
      <el-button type="primary" size="medium" @click="addBooks"
        >添加书籍</el-button
      >
    </div>
  </div>
</template>

<script>
import { NoticeMixin } from '@/common/js/mixin.js'
export default {
  mixins:[NoticeMixin],
  data() {
    return {
      books: [
        {
          imgUrl:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "你不知道的javascirpt上卷1",
          link: "https://leetcode-cn.com/",
          id: 18230,
        },
        {
          imgUrl:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "你不知道的javascirpt上卷2",
          link: "https://leetcode-cn.com/",
          id: 18324,
        },
        {
          imgUrl:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "你不知道的javascirpt上卷3",
          link: "https://leetcode-cn.com/",
          id: 18324,
        },
        {
          imgUrl:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "你不知道的javascirpt上卷4",
          link: "https://leetcode-cn.com/",
          id: 18324,
        },
        {
          imgUrl:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "你不知道的javascirpt上卷5",
          link: "https://leetcode-cn.com/",
          id: 18324,
        },
        {
          imgUrl:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "你不知道的javascirpt上卷",
          link: "https://leetcode-cn.com/",
          id: 18324,
        },
        {
          imgUrl:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "你不知道的javascirpt上卷",
          link: "https://leetcode-cn.com/",
          id: 18324,
        },
      ],
      // 图片放大必须是一个数组
      imgList: [
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      ],
    };
  },
  methods: {
    
  },
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
    .table-pic {
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
    .table-button {
      width: 25%;
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
      .books-pic {
        width: 15%;
        height: 140px;
        display: flex;
        .el-image {
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
      .books-button {
        width: 25%;
        display: flex;
        .buttons {
          margin: auto;
        }
      }
    }
  }
  .add-books {
    margin-top: 10px;
    .el-button {
      float: right;
    }
  }
}
</style>