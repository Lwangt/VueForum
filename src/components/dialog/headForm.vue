<template>
  <div class="login-form">
    <div class="flex justify-content-center align-items-center fs20 font-weight-700" style="color: #63d6e5">选择新的头像</div>

    <div class="flex justify-content-center align-items-center mt25">
      <div class="headP head1 cursor-pointer" @click="choose(1)" :style="this.num==1? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
      <div class="headP head2 cursor-pointer" @click="choose(2)" :style="this.num==2? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
      <div class="headP head3 cursor-pointer" @click="choose(3)" :style="this.num==3? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
      <div class="headP head4 cursor-pointer" @click="choose(4)" :style="this.num==4? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
      <div class="headP head5 cursor-pointer" @click="choose(5)" :style="this.num==5? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
      <div class="headP head6 cursor-pointer" @click="choose(6)" :style="this.num==6? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
    </div>
    <div class="flex justify-content-center align-items-center mt25">
      <div class="headP head8 cursor-pointer" @click="choose(8)" :style="this.num==7? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
      <div class="headP head9 cursor-pointer" @click="choose(9)" :style="this.num==8? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
      <div class="headP head10 cursor-pointer" @click="choose(10)" :style="this.num==9? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
      <div class="headP head11 cursor-pointer" @click="choose(11)" :style="this.num==10? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
      <div class="headP head12 cursor-pointer" @click="choose(12)" :style="this.num==12? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
      <div class="headP head13 cursor-pointer" @click="choose(13)" :style="this.num==13? 'box-shadow: 0 8px 50px 0 rgba(14, 117, 232, 0.95)' : ''"></div>
    </div>

    <div class="flex justify-content-center align-items-center mt50 mb10">
      <el-button @click="onCancel" round  size="medium" style="width: 98px">取消</el-button>
      <el-button @click="onQuit" round  size="medium" style="width: 98px;margin-left: 20px;background-color: #63d6e5;color: white">确认</el-button>
    </div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  data () {
    return {
      num:0
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),

    choose(nn){
      this.num = nn;
    },

    onQuit () {

      //关闭弹窗
      this.onCancel();

      //传输数据
      this.$emit('chooseHead',this.num);

      this.$message.info("选择成功");
      this.$emit("close-dialog");
    },

    onCancel () {
      this.$emit("close-dialog");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.g-title{
  margin-bottom: 32px;
  height: 30px;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: #63d6e5;
}
.loginDialog{
  border-radius: 8px;
}
.g-form-line {
  padding: 15px 0;
  margin-left: 120px;
}
.login-button{
  background-color: #63d6e5;
}

.headP{
  margin: 10px;
  width: 85px;
  height: 85px;
  border-radius: 50px;
  box-shadow: 0 8px 50px 0 rgba(0,0,0,0.18);
}
.head1{
  background: url(../../assets/head_images/1.png) no-repeat;
  background-size:cover;
}
.head2{
  background: url(../../assets/head_images/2.png) no-repeat;
  background-size:cover;
}
.head3{
  background: url(../../assets/head_images/3.png) no-repeat;
  background-size:cover;
}
.head4{
  background: url(../../assets/head_images/4.png) no-repeat;
  background-size:cover;
}
.head5{
  background: url(../../assets/head_images/5.png) no-repeat;
  background-size:cover;
}
.head6{
  background: url(../../assets/head_images/6.png) no-repeat;
  background-size:cover;
}
.head7{
  background: url(../../assets/head_images/7.png) no-repeat;
  background-size:cover;
}
.head8{
  background: url(../../assets/head_images/8.png) no-repeat;
  background-size:cover;
}
.head9{
  background: url(../../assets/head_images/9.png) no-repeat;
  background-size:cover;
}
.head10{
  background: url(../../assets/head_images/10.png) no-repeat;
  background-size:cover;
}
.head11{
  background: url(../../assets/head_images/11.png) no-repeat;
  background-size:cover;
}
.head12{
  background: url(../../assets/head_images/12.png) no-repeat;
  background-size:cover;
}
.head13{
  background: url(../../assets/head_images/13.png) no-repeat;
  background-size:cover;
}

</style>
