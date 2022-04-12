<template>
  <div class="login-form">
    <div class="flex justify-content-center align-items-center fs20 font-weight-700" style="color: #63d6e5">注册挨踢社区，加入我们</div>
    <div class="pt20 flex justify-content-center align-items-center">
      <el-form ref="form" :model="formData" :rules="formRules" label-width="120px" label-position="left" class="ui-el-form pl18">
        <el-form-item prop="name" label="用户名" class="mt10">
          <el-input  v-model="formData.name"  style="width: 280px"  maxlength="15" placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码" class="mt20">
          <el-input  v-model="formData.password" style="width: 280px" oninput ="value=value.replace(/[^a-zA-Z0-9.]/g,'')" placeholder="请输入密码" maxlength="25">
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="flex justify-content-center align-items-center mt50 mb10">
      <div ></div>
      <el-button @click="onCancel" round  size="medium" style="width: 98px">取消</el-button>
      <el-button @click="onRegister" round  size="medium" style="width: 98px;margin-left: 20px;background-color: #63d6e5;color: white">注册</el-button>
    </div>
  </div>
</template>

<script>

import {registerUrl} from "../services/register";

export default {
  data () {
    return {
      formData:{
        name: '',
        password: ''
      },
      formRules: {
        name: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  mounted() {

  },
  computed: {
    // userErrors () {
    //   let errorText, status
    //   if (!/jj/g.test(this.usernameModel)) {
    //     status = false
    //     errorText = '请输入正确的用户名'
    //   }
    //   else {
    //     status = true
    //     errorText = ''
    //   }
    //   if (!this.userFlag) {
    //     errorText = ''
    //     this.userFlag = true
    //   }
    //   return {
    //     status,
    //     errorText
    //   }
    // },
    // passwordErrors () {
    //   let errorText, status
    //   if (!/^\w{4,8}$/g.test(this.passwordModel)) {
    //     status = false
    //     errorText = '密码要在4-8位噢'
    //   }
    //   else {
    //     status = true
    //     errorText = ''
    //   }
    //   if (!this.passwordFlag) {
    //     errorText = ''
    //     this.passwordFlag = true
    //   }
    //   return {
    //     status,
    //     errorText
    //   }
    // }
  },
  methods: {
    async onRegister () {
      let _this = this;
      const fo = this.formData;
      try {
        await registerUrl({
          name: fo.name,
          password: fo.password
        }).then(res=>{
          // console.log(res);
          if (res.data.code === 200) {
            //关闭弹窗
            _this.onCancel();
            this.$message.info("注册成功");
          }
          else {
            this.$message.error(res.data.msg)
          }
        })
      } catch (e) {
        console.log(e)
      } finally {

      }
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
</style>
