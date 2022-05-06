<template>
    <div>

        <div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">

            <el-menu-item index="1">文章标题</el-menu-item>
            <el-menu-item index="2">文章简述</el-menu-item>
            <el-submenu index="5">
              <template slot="title">文章分类</template>
              <el-menu-item index="js">前端</el-menu-item>
              <el-menu-item index="back">后端</el-menu-item>
              <el-menu-item index="ai">人工智能</el-menu-item>
              <el-menu-item index="no">不分类</el-menu-item>
            </el-submenu>

            <el-menu-item index="3">用户昵称</el-menu-item>
            <el-menu-item index="4">评论内容</el-menu-item>
          </el-menu>
        </div>

        <div class="card"><card/></div>
        <span class="tip">挨踢社区为你找到了约 {{this.searchResultList.length}} 条结果</span>

        <div v-if="this.mountStatus">

<!--          <div v-if="isReloadData" class="search-page" v-for="item in searchResultList" :key="item.id">-->
<!--            <div v-if="searchType == 1">-->
<!--              <contentText :title="item.title" :text="item.introduction" :num="item.likeNum" :readNum="item.readNum" :author="item.userName" :time="item.createTime"/>-->
<!--            </div>-->
<!--            <div v-else-if="searchType == 2">-->
<!--              <contentText :title="item.title" :text="item.introduction" :num="item.likeNum" :readNum="item.readNum" :author="item.userName" :time="item.createTime"/>-->
<!--            </div>-->
<!--            <div v-else-if="searchType == 3">-->
<!--              id: {{item.id}}-->
<!--              用户昵称： {{item.name}}-->
<!--            </div>-->
<!--            <div v-else>-->
<!--              id: {{item.id}}-->
<!--              评论内容： {{item.name}}-->
<!--            </div>-->
<!--          </div>-->

          <div v-if="isReloadData  && searchType == 1" class="search-page" >
            <div v-for="(item,index) in searchResultList" :key="index" @click="goToPage(item.articleId)">
              <contentText :title="item.title" :text="item.introduction" :num="item.likeNum" :readNum="item.readNum" :author="item.userName" :time="item.createTime"/>
            </div>
            <div style="height: 100px;color: #d4d4d4;padding-left: 40px;padding-top: 80px;">(差不多到底啦……)</div>
          </div>

          <div v-else-if="isReloadData  && searchType == 2" class="search-page">
            <div v-for="(item,index) in searchResultList" :key="index" @click="goToPage(item.articleId)">
              <contentText :title="item.title" :text="item.introduction" :num="item.likeNum" :readNum="item.readNum" :author="item.userName" :time="item.createTime"/>
            </div>
            <div style="height: 100px;color: #d4d4d4;padding-left: 40px;padding-top: 80px;">(差不多到底啦……)</div>
          </div>

          <div v-else-if="isReloadData  && searchType == 3" class="search-page">
            <div v-for="(item,index) in searchResultList" :key="index">
              <contentTextTwo :name="item.name" :intro="item.intro" :sex="item.sex" :likeNum="item.followAccount" :fanNum="item.fanAccount" :time="item.createTime" :id="item.id"/>
            </div>
            <div style="height: 100px;color: #d4d4d4;padding-left: 40px;padding-top: 80px;">(差不多到底啦……)</div>
          </div>

          <div v-else-if="isReloadData" class="search-page">
            <div v-for="(item,index) in searchResultList" :key="index" @click="goToPage(item.articleId)">
              <contentTextThree :nickName="item.nickName" :content="item.content" :commentCount="item.commentCount" :createTime="item.createTime"/>
            </div>
            <div style="height: 100px;color: #d4d4d4;padding-left: 40px;padding-top: 80px;">(差不多到底啦……)</div>
          </div>

<!--          <div style="margin-left: 200px; color: #7b7b7b"> 到底啦 </div>-->



        </div>

    </div>
</template>

<script>
import card from './../components/base/card'
import contentText from './../components/contentText'
import contentTextTwo from "../components/contentTextTwo";
import contentTextThree from "../components/contentTextThree";
import {searchByArticleIntroduction,searchByComment,searchByArticleTitle,searchByUserName} from "../services/search"

export default {

  components:{
    contentText,
    contentTextTwo,
    contentTextThree,
    card
  },
  data(){
    return{
        searchType:1,
        arType:'',
        searchResultList:[],
        activeIndex: '1',
        searchText:'',
        mountStatus: false,
        isReloadData:true
      }
  },
  watch:{
    // '$store.state.searchItem': {
    //   handler() {
    //     // console.log("监听searchText发生了变化" + this.$store.state.searchItem );
    //     this.searchText = this.$store.state.searchItem;
    //     this.handleSelect();
    //   },
    //   immediate: true
    // }
  },
  mounted() {
    // this.search();
    this.mountStatus = true
  },
  created() {

  },
  methods:{
    handleSelect(key, keyPath) {
      console.log("########## handleSelect ###########")
      // console.log(key, keyPath);
      if(keyPath[0]=='5'){
        this.arType = key;
      }else{
        this.searchType = Number(key);
      }
      console.log("searchType");
      console.log(this.searchType);
      // console.log("arType");
      // console.log(this.arType);
      this.search();
    },

    search(aaa){
      if(aaa!=undefined) this.searchText = aaa;
      console.log("########## searchText = " + this.searchText)
      console.log("########## searchType1 = " + this.searchType)
      if(this.searchType == 1) this.searchByArticleTitleMethod();
      else if(this.searchType == 2) this.searchByArticleIntroductionMethod();
      else if(this.searchType == 3) this.searchByUserNameMethod();
      else if(this.searchType == 4) this.searchByCommentMethod();
      this.isReloadData = false;
      this.$nextTick(()=>{
        this.isReloadData = true;
      })
    },

    async searchByArticleTitleMethod(){
      let _this = this;
      var artType = null;
      if(_this.arType === 'js') artType = 'js';
      if(_this.arType === 'back') artType = 'back';
      if(_this.arType === 'ai') artType = 'ai';
      try {
        await searchByArticleTitle({
          title: _this.searchText,
          type: artType
        }).then(res=>{
          console.log(res);
          if (res.data.code === 200) {
            _this.searchResultList = res.data.data;
            console.log("########## searchType2 = " + _this.searchType)
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

    async searchByArticleIntroductionMethod(){
      let _this = this;
      var artType = null;
      if(_this.arType === 'js') artType = 'js';
      if(_this.arType === 'back') artType = 'back';
      if(_this.arType === 'ai') artType = 'ai';
      try {
        await searchByArticleIntroduction({
          content: _this.searchText,
          type: artType
        }).then(res=>{
          if (res.data.code === 200) {
            _this.searchResultList = res.data.data;
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

    async searchByUserNameMethod(){
      let _this = this;
      try {
        await searchByUserName({
          name: _this.searchText
        }).then(res=>{
          if (res.data.code === 200) {
            _this.searchResultList = res.data.data;
            console.log(_this.searchResultList)
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

    async searchByCommentMethod(){
      let _this = this;
      try {
        await searchByComment({
          content: _this.searchText
        }).then(res=>{
          if (res.data.code === 200) {
            _this.searchResultList = res.data.data;
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

    goToPage(id) {
      let routeData = this.$router.resolve({
        path: "/articleDetail",
        query: {
          id:id
        }
      });

      //必要操作，否则不会打开新页面
      window.open(routeData.href, '_blank');
      console.log("id = "+ id )
    }

  }
}
</script>

<style>
.search-page{
    width: 80%;
    margin: 0 auto;
}
.tip{
    width:80%;
    display: inline-block;
    color: #757575;
    font-weight: normal;
    margin-left: 140px;
    margin-top: 10px;
    font-size: 13px;
    padding-bottom: 8px;
    border-bottom: #d6d6d6 1px solid;
}
.card{
    width:870px;
    margin:0 auto;
    padding-top: 10px;
}
.el-menu {
  padding-left:147px;
}
</style>


