<template>
  <div>
    <div>
      <div class="flex">
        <div class="flex mb25 mt5" style="height: 30px;margin-left: 165px;">
          <div class="type mr15">选择分区</div>
          <div class="flex">
            <div :class="{'selectButton':selectNum===1}"  class="typeButton cursor-pointer" @click="changeTypeTo('js')">前端</div>
            <div :class="{'selectButton':selectNum===2}"  class="typeButton cursor-pointer" @click="changeTypeTo('back')">后端</div>
            <div :class="{'selectButton':selectNum===3}"  class="typeButton cursor-pointer" @click="changeTypeTo('ai')">人工智能</div>
          </div>
        </div>
        <div class=" mb25 mt5" style="margin-left: 500px">
          <div class="type" @click="titleClick()">文章标题</div>
        </div>
        <div class=" ml25 mb25 mt5">
          <div class="type" @click="miaoshuClick()">文章简述</div>
        </div>

      </div>

      <div class="flex justify-content-center">

        <div style="width: 85%;margin-bottom: 20px;">
          <mavon-editor style="height: 480px; border-radius: 25px;"  :ishljs = "true" v-model="article.content"/>
        </div>

      </div>

      <div class="flex justify-content-center">
        <div class=" ml25 mb25" style="float: right">
          <el-button class="ti_jiao" @click="addArticle()">提交</el-button>
        </div>
        <div class=" ml25 mb25" style="float: right">
          <el-button class="ti_jiao" @click="saveArticle()">保存草稿</el-button>
        </div>
      </div>

    </div>

    <TitleDialog ref="theTitleDialog" @dialogEvent="upadteTitleData"></TitleDialog>
    <MiaoShuDialog ref="theMiaoShuDialog" @dialogEvent="upadteMiaoShuData"></MiaoShuDialog>

  </div>


</template>

<script>
import {addArticle} from "../../services/article";
import TitleDialog from "../../components/dialog/articleTitleDialog";
import MiaoShuDialog from "../../components/dialog/articleMiaoShuDialog";

export default {
  name: "addArticle",
  components:{
    TitleDialog,
    MiaoShuDialog
  },
  data() {
    return {
       selectNum:0,
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

    changeTypeTo(x){
      this.article.type = x;
      if(x=="js") this.selectNum = 1;
      if(x=="back") this.selectNum = 2;
      if(x=="ai") this.selectNum = 3;
    },
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
    },

    saveArticle(){

    },


    upadteTitleData(xx){
      this.article.title = xx;
    },
    upadteMiaoShuData(xx){
      this.article.miaoshu = xx;
    },

    titleClick(){
      this.$refs.theTitleDialog.open();
    },
    miaoshuClick(){
      this.$refs.theMiaoShuDialog.open();
    }

  }
}

</script>

<style lang="scss" scoped>
.type{
  padding: 6px 20px 8px 20px;
  border-radius: 8px;
  background-color: #6ed0e3;
  color: #fff;
  font-weight: bold;
  width: 120px;
  text-align: center;
  box-shadow: 0px 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.typeButton{
  padding: 6px 15px 8px 15px;
  border-radius: 8px;
  background-color: #3fabe6;
  margin-right: 15px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.ti_jiao{
  background-color: #45a351;
  padding: 8px 15px 8px 15px;
  border-radius: 5px;
  color: #fff;
  font-weight: bolder;
  box-shadow: 0px 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.selectButton{
  background-color: #7145e2;
}
</style>
