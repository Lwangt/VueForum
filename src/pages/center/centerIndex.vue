<template>

</template>

<script>

import {getUserLikeArticleListById} from "../../services/center";
export default {
  data() {
    return {
      likeArticleList:[],
      id: this.$route.query.id,
    };
  },
  methods: {

    async getCommentList() {
      let _this = this;
      try {
        await getUserLikeArticleListById({
          id: 1372342426,
        }).then(res=>{
          console.log(res);
          if (res.data.code === 200) {
            var ss = res.data.likeArticleList.split(",");
            var list = new Array(ss.length);
            ss.forEach(function (item,index){
              list[index] = parseFloat(item)
            })
            this.likeArticleList = list;
            // console.log(this.likeArticleList)
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


  },
  mounted() {
    this.getCommentList();
  }
}
</script>


<style scoped>

</style>
