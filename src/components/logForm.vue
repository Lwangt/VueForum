<template>
  <div class="login-form">
    <div class="flex justify-content-center align-items-center fs20 font-weight-700" style="color: #009a61">登录挨踢社区</div>
    <div class="pt20 flex justify-content-center align-items-center">
      <el-form ref="form" :model="formData" :rules="formRules" label-width="120px" label-position="left" class="ui-el-form pl18">
        <el-form-item prop="username" label="用户名" class="mt10">
          <el-input  v-model="formData.username"  style="width: 280px"  maxlength="15" placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码" class="mt20">
          <el-input  v-model="formData.password" style="width: 280px" oninput ="value=value.replace(/[^a-zA-Z0-9.]/g,'')" placeholder="请输入密码" maxlength="25">
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="flex justify-content-center align-items-center mt50">
      <div ></div>
      <el-button @click="onCancel" round  size="medium" style="width: 98px">取消</el-button>
      <el-button @click="onLogin" round  size="medium" style="width: 98px;margin-left: 20px;background-color: #009a61;color: white">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData:{
        username: '',
        password: ''
      },
      formRules: {
        username: [{
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
    onLogin () {

    },
    onCancel () {

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
