<template>

</template>

<script>
import {addArticle} from "../../services/article";

export default {
  name: "addArticle",

  data() {
    return {
       article:{
         content:"",
         title:"",
         author_id:this.$store.state.userMessage.id,
         like_num:0,
         read_num:0,
         comment_num:0,
         miaoshu:"",
         type:""
       }
    };
  },

  methods: {

    async addArticle() {
      let _this = this;
      try {
        await addArticle({
            article: _this.article
        }).then(res=>{
          if (res.data.code === 200) {
            this.$message.success("文章发布成功！")
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

<style scoped>

</style>
