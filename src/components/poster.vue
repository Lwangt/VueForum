<template>
  <div>
    <div class="head-post">
      <div class="post-info">
        <div class="info-left">
          <p class="info-big">在挨踢社区内，学习技能、解决问题</p>
          <p class="info-small">这是一个崭新的IT交流平台。IT新人们可以在这里学习基础的技术，分享自己的心得，通过查阅文章来解决自己的困惑以及提升自身的能力。当然，最希望的是能够提高你们对技术的兴趣。</p>
        </div>
        <div class="info-right">
          <!--                    <div class="btn-box">-->
          <!--                        <el-button type="success" round class="btn-log btn-size">免费注册</el-button>-->
          <!--                        <el-button type="success" round class="btn-reg btn-size">立即登陆</el-button>-->
          <!--                    </div>-->
        </div>
      </div>
      <div class="cancle-i">
        <img src="./../assets/cancel.png" alt="" width="18px" @click="cancelPost">
      </div>
    </div>

  </div>
</template>


<script>
import { Button } from 'element-ui';
export default {
  methods:{
    cancelPost(){
      console.log("has clicked")
      this.$emit('closePost')
    }
  }
}
</script>


<style lang="scss" scoped>

.head-post{
  position: relative;
  width:100%;
  background-color: #53d2ec;
  height: 190px;
  padding-top: 20px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

}
.post-info{
  width: 90%;
  height: 100%;
  margin: 0px auto;
  padding-top: 20px;
  box-sizing: border-box;
  background:url('./../assets/char.png') 200px no-repeat ;
  background-position: 750px;
  background-size: 140px;
}
.info-left{
  width: 50%;
  float: left;
}
.info-right{
  width: 45%;
  display: inline-block;
  height: 100%;
  background:url('./../assets/cat-bc.png')  no-repeat ;
  background-position: 430px 90px;
}
.info-big{
  font-size: 25px;
  color:#fff;
  line-height: 25px;
}
.info-small{
  margin-top:25px;
  font-size: 18px;
  color:#fff;
  line-height: 23px;
  width: 600px;
}
.btn-box{
  width: 50%;
  margin-left: 250px;
  margin-top:25px;
}
.btn-size{
  width:120px;
  height:50px;
  font-size: 19px;
  padding-bottom: 20px;
  box-sizing: border-box;
}
.btn-log{
  background-color: #fff;
  color: #53d2ec;
  font-weight: normal;
}
.btn-reg{
  background-color: #53d2ec;
  color: #fff;
  font-weight: normal;
  border:1px solid #fff;
}
.cancle-i{
  cursor: pointer;
  position:absolute;
  top: 8px;
  right: 5px;
}
</style>
