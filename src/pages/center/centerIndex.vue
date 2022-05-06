<template>

  <div style="background-color:rgba(83,210,236,0.19);padding-bottom: 100px;">

    <div style="height: 65px;"></div>
   <div v-if="isReloadData"  class="flex align-items-center">
     <div class="ml40 flex" style="width: 600px;background-color: #ffffff;padding:20px;padding-left:30px;border-radius: 15px;  box-shadow: 0 14px 50px 0 rgba(128,128,128,0.18);">
       <div ref="headPlace" class="headP">
       </div>
       <div class="ml30 mt2">
         <div class="c-title">{{thisUser.name}}</div>
         <div class="c-text">{{thisUser.intro}}</div>
         <div class="c-bottom">
           <i class="el-icon-star-on" ></i>
           <span class="collect">关注数：{{thisUser.followAccount}}</span>
           <i class="el-icon-view" ></i>
           <span class="read">粉丝数：{{thisUser.fanAccount}}</span>
           <span class="author">{{thisUser.sex}} </span>
           <span class="time">注册时间： {{thisUser.createTime}}</span>
         </div>
       </div>
     </div>
     <div v-if="(isMine && isEdit)" class="flex" style="margin-left:140px;width: 600px;background-color: #ffffff;padding:20px;padding-left:30px;border-radius: 15px;  box-shadow: 0 14px 50px 0 rgba(128,128,128,0.18);">
       <div class="headP2 flex align-items-center justify-content-center" @click="headClick()" ref="headPlace2">
        <i class="el-icon-user-solid"></i>
       </div>
       <div class="ml30 mt2">
         <input class="title2" placeholder="新用户名" maxlength="12" v-model="form.name"></input>
         <input class="c-text2" style="width: 100%" placeholder="新个人简介" maxlength="20" v-model="form.intro"></input>
         <div class="flex align-items-center">
           <div class="fs14" style="color: #999999">性别：</div>
           <input class="c-bottom2" placeholder="新性别" maxlength="4" v-model="form.sex"></input>
           <div class="fs14" style="color: #999999">新密码：</div>
           <input class="c-bottom3" placeholder="########" maxlength="20" v-model="newPassword"></input>
         </div>
       </div>
     </div>
     <div v-if="isMine" class="ml30 flex align-items-center justify-content-center cursor-pointer" @click="eedit()" style="width: 60px; height:60px; background-color: #ffffff;border-radius: 15px;  box-shadow: 0 14px 50px 0 rgba(128,128,128,0.31);">
       <i v-if="isEdit" class="el-icon-success"></i>
       <i v-else class="el-icon-s-tools"></i>
     </div>
   </div>


    <div style="width:95%;margin-left: 40px;margin-top: 65px;">
      <div class="fs22 mb20 pt15 pl25" style="height:53px; width: 200px; background-color: #ffffff;border-radius: 15px;  box-shadow: 0 14px 50px 0 rgba(128,128,128,0.31);">
        <div style="color: #9781e9;font-weight: bold">发布的文章：</div>
      </div>

      <div style="height:350px;padding:20px;background-color: #ffffff;border-radius: 15px;  box-shadow: 0 14px 50px 0 rgba(0,0,0,0.18);">
        <div class="ui-scrollbar overflow-y-auto" style="height:300px;padding:25px;background-color: #ffffff;">
          <div v-for="item in myArticle" :key="item.id">
            <contentText  v-if="isReloadData" :title="item.title" :text="item.introduction" :num="item.likeNum" :readNum="item.readNum" :author="item.userName" :time="item.createTime" @click="goToPage(item.articleId)"/>
            <div @click="deleteA(item.authorId,userMessage.id,item.articleId)" class="cursor-pointer mt5 flex align-items-center" style="color: #9781e9">
              <div style="margin-right: 5px;padding-top: 2px;">
                <i class="el-icon-delete-solid" ></i>
              </div>
              <div>删除文章</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="width:95%;margin-left: 40px;margin-top: 85px;">
      <div class="fs22 mb20 pt15 pl25" style="height:53px; width: 200px; background-color: #ffffff;border-radius: 15px;  box-shadow: 0 14px 50px 0 rgba(128,128,128,0.31);">
        <div style="color: #fc95c2;font-weight: bold">发布的文章：</div>
      </div>

      <div style="height:350px;padding:20px;background-color: #ffffff;border-radius: 15px;  box-shadow: 0 14px 50px 0 rgba(0,0,0,0.18);">
        <div class="ui-scrollbar overflow-y-auto" style="height:300px;padding:25px;background-color: #ffffff;">
          <div v-for="item in article" :key="item.id">
            <contentText  v-if="isReloadData" :title="item.title" :text="item.introduction" :num="item.likeNum" :readNum="item.readNum" :author="item.userName" :time="item.createTime" @click="goToPage(item.articleId)"/>
            <div @click="disLike(item.articleId,userMessage.id)" class="cursor-pointer mt5 flex align-items-center" style="color: #eaabc7">
              <div style="margin-right: 5px;padding-top: 2px;">
                <svg t="1651552311266" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1304" width="20" height="20"><path d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z" fill="#E5404F" p-id="1305"></path></svg>
              </div>
              <div>取消喜欢</div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <my-dialog :is-show="isHeadDialog" @on-close="closeDialog('isHeadDialog')">
      <HeadForm @close-dialog="closeDialog('isHeadDialog')" @chooseHead="changeHead" ></HeadForm>
    </my-dialog>

  </div>


</template>

<script>

import Dialog from "../../components/base/dialog"
import HeadForm from "../../components/dialog/headForm";
import {addClass} from "../../utils/addClass"
import {getUserLikeArticleListById} from "../../services/center";
import {getArticleByList,getArticleListByAuthorId,deleteArticle} from "../../services/article";
import {disLikeArticle,getUserById,editUser} from "../../services/user";
import contentText from "../../components/contentText";
export default {
  components:{
    contentText,
    MyDialog:Dialog,
    HeadForm
  },
  data() {
    return {
      isEdit:false,
      isMine:false,
      isReloadData:true,
      likeArticleList:[],
      article:[],
      myArticle:[],
      id: this.$route.query.id,
      userMessage: this.$store.state.userMessage,
      thisUser:{},
      form:{},
      newPassword:'',
      chooseHeadNum: null,
      isHeadDialog:false
    };
  },
  methods: {

    async getLikeArticleList() {
      let _this = this;
      try {
        await getUserLikeArticleListById({
          id: _this.id,
        }).then(res=>{
          if (res.data.code === 200) {
            var ss = res.data.likeArticleList.split(",");
            var list = new Array(ss.length);
            ss.forEach(function (item,index){
              list[index] = parseFloat(item)
            })
            _this.likeArticleList = list;
            // console.log(_this.likeArticleList)
          }
          else {
            this.$message.error(res.data.msg)
          }
        })
      } catch (e) {
        console.log(e)
      } finally {

        try {
          await getArticleByList(
            _this.likeArticleList
          ).then(res=>{
            if (res.data.code === 200) {
              this.article = res.data.data;
            }
            else {
              this.$message.error(res.data.msg)
            }
          })
        } catch (e) {
          console.log(e)
        } finally {

        }

      }

      },

    goToPage(id) {
      let routeData = this.$router.resolve({
        path: "/articleDetail",
        query: {
          id:id
        }
      });

      //必要操作，否则不会打开新页面
      window.open(routeData.href, '_blank');
    },

    async disLike(articleId,userId){

      if(userId!=this.id){
        this.$message.error("非原文作者，没有操作权限")
      }
      else {

        let _this = this;
        _this.likeArticleList.forEach(function (item,index){
          if(item == articleId) _this.likeArticleList.splice(index, 1);
        })

        var newArrString = _this.likeArticleList.toString()

        try {
          await disLikeArticle(
            {
              id: userId,
              likeArticleList: newArrString
            }
          ).then(res=>{
            if (res.data.code === 200) {
              this.article = res.data.data;
            }
            else {
              this.$message.error(res.data.msg)
            }
          })
        } catch (e) {
          console.log(e)
        } finally {
          this.$message.info("取消成功");
          _this.reloadMethod();
        }

      }


    },

    async deleteA(authorId,thisId,artId){
      let _this = this;
      if(thisId!=authorId){
        this.$message.error("非原文作者，没有权限删除")
      }
      else{

        try {
          await deleteArticle({
            articleId: artId,
          }).then(res=>{
            if (res.data.code === 200) {
              this.$message.info("删除成功")
            }
            else {
              this.$message.error(res.data.msg)
            }
          })
        } catch (e) {
          console.log(e)
        } finally {
          _this.reloadMethod();
        }

      }
    },

    async getMyArticle() {
      let _this = this;
      try {
        await getArticleListByAuthorId({
          id: _this.id,
        }).then(res=>{
          if (res.data.code === 200) {
            _this.myArticle = res.data.data;
          }
          else {
            this.$message.error(res.data.msg)
          }
        })
      } catch (e) {
        console.log(e)
      } finally { }

    },

    async getThisUser() {
      let _this = this;
      try {
        await getUserById({
          id: _this.id,
        }).then(res=>{
          if (res.data.code === 200) {
            _this.thisUser = res.data.data;
            //复制给form
            _this.form = { ..._this.thisUser };
          }
          else {
            this.$message.error(res.data.msg)
          }
        })
      } catch (e) {
        console.log(e)
      } finally {
        _this.loadHead(1);
      }

    },

    async editUserMessage() {
      let _this = this;
      if(_this.newPassword!=''){
        try {
          await editUser({
            id: _this.id,
            name: _this.form.name,
            intro: _this.form.intro,
            sex: _this.form.sex,
            userImg: _this.chooseHeadNum.toString(),
            password: _this.newPassword
          }).then(res=>{
            if (res.data.code === 200) {
              this.$message.info("个人信息与密码更新成功")
              //保存用户信息到vuex中
              this.$store.dispatch('storeUserMessage',res.data.userMessage)
              _this.newPassword = ''
            }
            else {
              this.$message.error(res.data.msg)
            }
          })
        } catch (e) {
          console.log(e)
        } finally {
          _this.reloadMethod();
        }
      }
      else{
        try {
          await editUser({
            id: _this.id,
            name: _this.form.name,
            intro: _this.form.intro,
            sex: _this.form.sex,
            userImg: _this.chooseHeadNum.toString(),
          }).then(res=>{
            if (res.data.code === 200) {
              this.$message.info("个人信息更新成功")
              //保存用户信息到vuex中
              this.$store.dispatch('storeUserMessage',res.data.userMessage)
              _this.newPassword = ''
            }
            else {
              this.$message.error(res.data.msg)
            }
          })
        } catch (e) {
          console.log(e)
        } finally {
          _this.reloadMethod();
        }
      }


    },

    judgeMine(){
      if(this.id == this.userMessage.id) this.isMine = true;
    },

    closeDialog(attr){
      this[attr]=false
    },

    headClick(){
      this.isHeadDialog=true
    },

    changeHead(headNum){

      console.log("headNum" + headNum);
      if(headNum!=0) {
        this.chooseHeadNum = headNum;
      }
      this.loadHead(2);
    },

    eedit(){
      //正在编辑 点击确定
      if(this.isEdit==true){
        this.editUserMessage();
        this.isEdit = false;
        this.reloadMethod();
      }
      else{
        this.isEdit = true;
        this.reloadMethod();
      }
    },

    loadHead(n){
      let num = null;
      let item = null;
      if(n == 1) {
        item = this.$refs.headPlace;
        num = this.thisUser.userImg;
      }
      else {
        item = this.$refs.headPlace2;
        num = this.chooseHeadNum;
      }

      let ss = 'head'+num.toString();
      addClass(item,ss);
    },

    reloadMethod(){
      this.isReloadData = false;
      this.judgeMine();
      this.getLikeArticleList();
      this.getMyArticle();
      this.getThisUser();
      this.loadHead(1);
      this.$nextTick(()=>{
        this.isReloadData = true;
      })
    },


  },
  mounted() {
    this.getLikeArticleList();
    this.getMyArticle();
    this.getThisUser();
    this.judgeMine();
  }
}
</script>


<style lang="scss" scoped>

.el-icon-delete-solid {
  display: inline-block;
  color: #a76af0;
  font-size: 18px;
}

.c-title{
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #212121;
  position: relative;
  vertical-align: middle;
  margin-bottom: 5px;
}
.title2{
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #212121;
  position: relative;
  vertical-align: middle;
  margin-bottom: 5px;
  border-style: none;
  background-color: #ffffff;
}
.c-title:hover{
  font-weight: bold;
  color: #4dd8f1;
  cursor: pointer;
}
.c-text{
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  color: #888;
  font-size: 15px;
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  line-height: 1.5;
  border-style: none;
  background-color: #ffffff;
}
.c-text2{
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  color: #888;
  font-size: 15px;
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  line-height: 1.5;
  border-style: none;
  background-color: #ffffff;
}
.el-icon-star-on{
  display: inline-block;
  color: #7acfde;
  font-size: 16px;
}
.author{
  color: #888;
  font-size: 14px;
  margin-left: 20px;
}
.collect{
  font-weight: bold;
  color: #7acfde;
}
.c-bottom{
  font-size: 14px;
  border-style: none;
  background-color: #ffffff;
}
.c-bottom2{
  font-size: 14px;
  width: 30px;
  border-style: none;
  background-color: #ffffff;
}
.c-bottom3{
  font-size: 14px;
  width: 200px;
  border-style: none;
  background-color: #ffffff;
}
.time{
  color: #9E9E9E;
  font-size: 12px;
  margin-left: 10px;
}
.read{
  font-weight: bold;
  color: #97bdf1;
}
.el-icon-view{
  margin-left: 10px;
  display: inline-block;
  color: #7acfde;
  font-size: 14px;
  font-weight: bold;
}
.el-icon-success{
  color: #7acfde;
  font-size: 28px;
}
.el-icon-s-tools{
  color: #7acfde;
  font-size: 28px;
}
inpput :focus{
  border-style: none;
}
.headP{
  width: 85px;
  height: 85px;
  border-radius: 50px;
  box-shadow: 0 8px 50px 0 rgba(0, 0, 0, 0.28);
}
.headP2{
  width: 85px;
  height: 85px;
  border-radius: 50px;
  box-shadow: 0 8px 50px 0 rgba(0, 0, 0, 0.09);
}
.el-icon-user-solid{
  color: #7acfde;
  font-size: 42px;
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
