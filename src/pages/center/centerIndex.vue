<template>

  <div>

    <div style="width: 600px;margin-left: 40px">
      <div>喜欢的文章：</div>
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


</template>

<script>

import {getUserLikeArticleListById} from "../../services/center";
import {getArticleByList} from "../../services/article";
import {disLikeArticle} from "../../services/user";
import contentText from "../../components/contentText";
export default {
  components:{
    contentText
  },
  data() {
    return {
      isReloadData:true,
      likeArticleList:[],
      article:[],
      id: this.$route.query.id,
      userMessage: this.$store.state.userMessage
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
            // console.log("res");
            console.log(res);
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
          // console.log("res");
          console.log(res);
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


    },


    reloadMethod(){
      this.isReloadData = false;
      this.getLikeArticleList();
      this.$nextTick(()=>{
        this.isReloadData = true;
      })
    },


  },
  mounted() {
    this.getLikeArticleList();
  }
}
</script>


<style lang="scss" scoped>

</style>
