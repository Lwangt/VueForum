<template>
  <div>
    <el-dialog
      title="文章描述"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <el-input  type="textarea" placeholder="请输入对本文章的简介描述内容在15-35字之间"  maxlength="35" v-model="article.miaoshu"></el-input>

      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="onSubimtData">确 定</el-button>

    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return{
      dialogData:null,
      dialogVisible: false
    }
  },
  methods: {
    open () {
      this.dialogVisible = true
    },

    onSubimtData(){
      this.$emit('dialogEvent',this.dialogData);
      this.dialogVisible = false;
    }
  }
}
</script>

<style scoped>
</style>
