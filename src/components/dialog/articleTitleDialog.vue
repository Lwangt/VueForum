<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      custom-class="myDDialog"
      :append-to-body="true">
      <div class="flex flex-direction-column align-items-center justify-content-center">
        <div class="g-title">文章标题</div>

        <el-input  placeholder="请输入文章的标题" style="width: 70%" maxlength="20" v-model="dialogData"></el-input>

        <div class="flex justify-content-center align-items-center mt50 mb10">
          <el-button @click="dialogVisible = false" round  size="medium" style="width: 98px">取消</el-button>
          <el-button @click="onSubimtData" round  size="medium" style="width: 98px;margin-left: 20px;background-color: #63d6e5;color: white">确认</el-button>
        </div>
      </div>
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

<style lang="scss" scoped>
/deep/ .myDDialog{
  width: 45%;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 14px 69px 0 rgba(0,0,0,0.37);
}
.g-title{
  margin-bottom: 32px;
  height: 30px;
  font-size: 27px;
  text-align: center;
  font-weight: bold;
  color: #63d6e5;
}
</style>
