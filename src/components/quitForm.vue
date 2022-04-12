<template>
  <div class="login-form">
    <div class="flex justify-content-center align-items-center fs20 font-weight-700" style="color: #009a61">是否退出登录？</div>
    <div class="flex justify-content-center align-items-center mt50 mb10">
      <el-button @click="onCancel" round  size="medium" style="width: 98px">取消</el-button>
      <el-button @click="onQuit" round  size="medium" style="width: 98px;margin-left: 20px;background-color: #009a61;color: white">确认</el-button>
    </div>
  </div>
</template>

<script>

import {quitUrl} from "../services/login";
import { mapMutations } from 'vuex';

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),

    async onQuit () {
      //重置vuex中的用户信息和token
      localStorage.setItem('Authorization',null);
      await this.$store.dispatch('storeUserMessage', {
        id: null,
        name: '',
        password: ''
      })

      //关闭弹窗
      this.onCancel();

      //刷新页面
      this.$emit('updateLogin');
      this.$emit('reloadTopLogin');

      this.$message.info("退出成功");
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
  color: #04cb81;
}
.loginDialog{
  border-radius: 8px;
}
.g-form-line {
  padding: 15px 0;
  margin-left: 120px;
}
.login-button{
  background-color: #04cb81;
}
</style>
