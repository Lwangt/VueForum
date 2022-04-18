<template>
  <div class="my_dialog">
    <el-dialog
      title="文章标题"
      :visible.sync="dialogVisible"
      width="50%"
      :append-to-body="true">
      <el-input  placeholder="请输入文章的标题"  maxlength="20" v-model="dialogData"></el-input>

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
.my_dialog{
  width: 45%;
  max-height: 70%;
  background: #ffffff;
  top: 20%;
  left: 55%;
  margin-left: -25%;
  border-radius: 10px;
  box-shadow: 0 14px 69px 0 rgba(0,0,0,0.37);

}
</style>
