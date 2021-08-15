<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="公告内容">
        <el-input type="textarea" v-model="form.desc" rows="5"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        title:'',
        desc:''
      }
    }
  },
}
</script>

<style lang="less">
.el-message-box {
  width: 800px;
}
</style>