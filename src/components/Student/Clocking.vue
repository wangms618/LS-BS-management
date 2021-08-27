<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="打卡描述">
        <el-input type="textarea" rows="5" v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="图片上传">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture"
          :auto-upload="false"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("打卡成功");
      return true
    },
  },
};
</script>

<style lang="less">
.el-message-box {
  width: 800px;
}
</style>