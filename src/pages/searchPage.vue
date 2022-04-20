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
            <el-menu-item index="2">文章内容</el-menu-item>
            <el-submenu index="5">
              <template slot="title">文章分类</template>
              <el-menu-item index="js">前端</el-menu-item>
              <el-menu-item index="back">后端</el-menu-item>
              <el-menu-item index="ai">人工智能</el-menu-item>
            </el-submenu>

            <el-menu-item index="3">用户昵称</el-menu-item>
            <el-menu-item index="4">评论内容</el-menu-item>
          </el-menu>
        </div>

        <div class="card"><card/></div>
        <span class="tip">德布脑内为你找到了约 {{this.searchResultList.length}} 条结果</span>

        <div v-if="this.searchType === 1 || this.searchType === 2" class="search-page" v-for="item in searchResultList" :key="item.id">
            <div>
              <contentText v-if="isReloadData" :title="item.title" :text="item.introduction" :num="item.likeNum" :readNum="item.readNum" :author="item.userName" :time="item.createTime"/>
            </div>
        </div>

        <div v-if="this.searchType === 3" class="search-page" v-for="item in searchResultList" :key="item.id">
          <div>
            id: {{item.id}}
            用户昵称： {{item.name}}
          </div>
        </div>

        <div v-if="this.searchType === 4" class="search-page" v-for="item in searchResultList" :key="item.id">
          <div>
            id: {{item.id}}
            评论内容： {{item.name}}
          </div>
        </div>


    </div>
</template>

<script>
import card from './../components/base/card'
import contentText from './../components/contentText'
import {searchByArticleContent,searchByComment,searchByArticleTitle,searchByUserName} from "../services/search"

export default {

  components:{
    contentText,
    card
  },
  data(){
    return{
        searchType:1,
        arType:'',
        searchResultList:[],
        activeIndex: '1',
        searchText:'',
      }
  },
  watch:{
    '$store.state.searchItem': {
      handler() {
        // console.log("监听searchText发生了变化" + this.$store.state.searchItem );
        this.searchText = this.$store.state.searchItem;
        this.handleSelect();
      },
      immediate: true
    }
  },
  mounted() {
    this.search();
    this.ll();
  },
  created() {

  },
  methods:{

    ll(){
      console.log("llllllllllllll")
    },
    handleSelect(key, keyPath) {
      console.log("########## handleSelect ###########")
      // console.log(key, keyPath);
      if(keyPath[0]=='5'){
        this.arType = key;
      }else{
        this.searchType = key;
      }
      // console.log("searchType");
      // console.log(this.searchType);
      // console.log("arType");
      // console.log(this.arType);
      this.search();
    },

    async search(){
      console.log("########## search ###########")
      if(this.searchType === 1) await this.searchByArticleTitleMethod();
      if(this.searchType === 2) await this.searchByArticleContentMethod();
      if(this.searchType === 3) await this.searchByUserNameMethod();
      if(this.searchType === 4) await this.searchByCommentMethod();
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

    async searchByArticleContentMethod(){
      let _this = this;
      var artType = null;
      if(_this.arType === 'js') artType = 'js';
      if(_this.arType === 'back') artType = 'back';
      if(_this.arType === 'ai') artType = 'ai';
      try {
        await searchByArticleContent({
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


