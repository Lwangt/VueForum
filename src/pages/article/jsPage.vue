<template>
    <div class="right-content">
        <card/>
        <span class="right-title" > 前端</span>
<!--        <div v-for="item in contentList" :key="item.id" @click="goToPage(item.article_id)">-->
<!--            <contentText :title="item.title" :text="item.text" :num="item.num" :author="item.author" :time="item.time"/>-->
<!--        </div>-->
        <div v-for="item in articleList" :key="item.id" @click="goToPage(item.articleId)">
          <contentText v-if="isReloadData" :title="item.title" :text="item.introduction" :num="item.likeNum" :readNum="item.readNum" :author="item.userName" :time="item.createTime"/>
        </div>

    </div>
</template>

<script>
import contentText from './../../components/contentText'
import card from './../../components/base/card'
import {getArticleListByType} from "../../services/article"
import {getUserNameById} from  '../../services/user'
export default {
    data(){
        return{
            isReloadData:true,
            midName:'',
            articleList:[]
        }
    },
    components:{
        contentText,
        card
    },
  mounted() {
    this.getArticleList();
  },
  methods:{
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
    },

    async getArticleList() {
      let _this = this;
      try {
        await getArticleListByType({
          type: "js",
        }).then(res=>{
          if (res.data.code === 200) {
            _this.articleList = res.data.data;
            _this.addNametoList();
          }
          else {
            this.$message.error(res.data.msg)
          }
        })
      } catch (e) {
        console.log(e)
      } finally {
      }
      await _this.reloadUserNameMethod();
    },

    //调用接口
    async autoGetUserNameById(idd){
      let _this = this;
      try {
        await getUserNameById({
          id: idd
        }).then(res=>{
          if (res.data.code === 200) {
            _this.midName = res.data.userName;
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

     addNametoList(){
       let _this = this;
       _this.articleList.forEach(async x=>{
          if(x.authorId){
            await _this.autoGetUserNameById(x.authorId);
            x.userName = _this.midName;
            await _this.reloadUserNameMethod();
          }
        })
    },

    async reloadUserNameMethod(){
      this.isReloadData = false;
      this.$nextTick(()=>{
        this.isReloadData = true;
      })
    },

  }
}
</script>


<style>
.right-content{
    width:100%;
    margin-top: 20px;
}
.right-title{
    display: inline-block;
    width:100%;
    margin-top: 15px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
}

</style>
