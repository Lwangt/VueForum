<template>
  <div class="container">
    <div class="fs22 pl5">评论区</div>
    <div class="flex mt35" style="margin-left: 10px">
      <div class="mr15" style="width: 50px;height: 50px;background-color: #8ccded;border-radius: 8px"></div>
      <input class="comment_input" v-model="textToSend" ></input>
      <div >
        <div class="input_button flex align-items-center justify-content-center cursor-pointer" @click="send()">
          {{ this.buttonText }}
        </div>
      </div>
    </div>
    <!--     一层循环-->
    <div class="ml10 mt20" v-for="item in comments">
      <div class="flex">
        <div class="mr15" style="width: 50px;height: 50px;background-color: #8ccded;margin-top: 18px;border-radius: 8px">
        </div>
        <div class="flex flex-direction-column">
          <div class="flex" style="margin-top: 20px;">
            <div >{{item.nickName}}</div>
            <div class="ml20" style="color: #cccccc">{{item.createTime}}</div>
          </div>
          <div class="mt15">
            <div>{{item.content}}</div>
          </div>
          <div class="mt15 flex">
            <div style="color: #ced3d2;font-size: 15px;">共{{item.commentCount}}条回复&nbsp&nbsp</div>
            <div @click="huifu(item.id,item.nickName,1)" style="color: #96e6dd;font-size: 15px;cursor:pointer">回复</div>
          </div>
        </div>
      </div>
      <!--     二层循环-->
      <div class="ml80 flex flex-direction-column" v-for="item in item.children">
        <div class="flex mt10">
          <div class="mr15" style="width: 40px;height: 40px;background-color: #8ccded;margin-top: 25px;border-radius: 6px">
          </div>
          <div class="flex flex-direction-column">
            <div class="flex" style="margin-top: 20px;">
              <div>{{item.nickName}}</div>
              <div v-if="item.toWho" style="color: #dbdada;font-size: 12px;margin-top: 2px;">&nbsp&nbsp▶&nbsp&nbsp</div>
              <div v-if="item.toWho">{{item.toWho}}</div>
              <div class="ml20" style="color: #cccccc">{{item.createTime}}</div>
            </div>
            <div class="mt15">
              <div>{{item.content}}</div>
            </div>
            <div class="mt15 flex">
              <div style="color: #ced3d2;font-size: 15px;">共{{item.commentCount}}条回复&nbsp&nbsp</div>
              <div @click="huifu(item.parentId,item.nickName,2)" style="color: #96e6dd;font-size: 15px;cursor:pointer">回复</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {addComment, sendComment} from "../services/comment";
import {deleteComment} from "../services/comment";
import {getCommentListByArticleId} from "../services/comment";

export default {
  name: "comment",
  // props: {
  //   objectData: {
  //     type: Object
  //   },
  //   required: true
  // },
  data() {
    return {
      comments: {},
      buttonText:'评论',
      textToSend:'',
      article_id: this.$route.query.id,
      theId:0,
      theNickName:'',
      dd:0,
      replyForm: {}
    };
  },
  watch: {

  },
  methods: {

    async getComment() {
      let _this = this;
      try {
        await getCommentListByArticleId({
          id: _this.article_id
        }).then(res=>{
          console.log(res);
          if (res.data.code === 200) {
            this.comments = res.data.data;
            _this.makeCommentWork();
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

    huifu(id,nickName,jud){
      if(this.dd == 0){
        this.theId = id;
        if(jud == 2) this.theNickName = nickName;
        this.dd = 1;
        this.buttonText = '回复';
      }
      else{
        this.theId = 0;
        this.theNickName = '';
        this.dd = 0;
        this.buttonText = '评论';
      }
    },

    async send(){
      let _this = this;
      try {
        await sendComment({
          parentId: _this.theId,
          content: _this.textToSend,
          nickName: _this.$store.state.userMessage.name,
          toWho: _this.theNickName,
          articleId: _this.$route.query.id,
          likeCount: 0,
          commentCount: 0,
        }).then(res=>{
          if (res.data.code === 200) {
            this.comments = res.data.data;
          }
          else {
            this.$message.error(res.data.msg)
          }
        })
      } catch (e) {
        console.log(e)
      } finally {

      }

      //刷新数据
      await _this.getComment();
      _this.textToSend = '';
      _this.dd = 0;
      _this.buttonText = '评论';

      if(_this.dd == 0) this.$message.info("评论成功");
      else this.$message.info("回复成功");

    },

    makeCommentWork(){
      let _this = this;
      const arr = [];

      //构造子数组：arr
      _this.comments.forEach(function (item){
        if(item.parentId){
          arr.push(item);
        }
      });

      // comments减去arr
      var newArr = _this.comments.filter(function (obj1, index) {
        return !arr.find(function (obj2) {
          return obj1.id === obj2.id
        })
      })
      _this.comments = newArr;

      //将arr加在comments的子元素里
      _this.comments.forEach(x=>{
        x.children = [];
        arr.forEach(y=>{
          if(y.parentId == x.id){
            x.children.push(y)
          }
        })
      });

      console.log(_this.comments)

    }

  },
  mounted() {
    this.getComment();
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 100px 10px;
  box-sizing: border-box;
}
.container .header {
  padding-bottom: 0.21428571rem;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
}
.container .comment {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #f2f6fc;
}
.container .comment .info {
  display: flex;
  align-items: center;
}
.container .comment .info .avatar {
  border-radius: 50%;
}
.container .comment .info .right {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.container .comment .info .right .name {
  font-size: 16px;
  color: #303133;
  margin-bottom: 5px;
  font-weight: 500;
}
.container .comment .info .right .date {
  font-size: 12px;
  color: #909399;
}
.container .comment .content {
  font-size: 16px;
  color: #303133;
  line-height: 20px;
  padding: 10px 0;
}
.container .comment .control {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #909399;
}
.container .comment .control .like {
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}
.container .comment .control .like.active,
.container .comment .control .like:hover {
  color: #1fa059;
}
.container .comment .control .like .iconfont {
  font-size: 14px;
  margin-right: 5px;
}
.container .comment .control .comment-reply {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.container .comment .control .comment-reply:hover {
  color: #333;
}
.container .comment .control .comment-reply .iconfont {
  font-size: 16px;
  margin-right: 5px;
}
.container .comment .reply {
  margin: 10px 10px;
  border-left: 2px solid #dcdfe6;
}
.container .comment .reply .item {
  margin: 0 10px;
  padding: 10px 0;
  border-bottom: 1px dashed #ebeef5;
}
.container .comment .reply .item .reply-content {
  display: flex;
  align-items: center;
  padding: 0px 10px;
  font-size: 14px;
  color: #303133;
}
.container .comment .reply .item .reply-content .from-name {
  color: #1fa059;
  padding: 0 10px;
}
.container .comment .reply .item .reply-content .to-name {
  color: #1fa059;
  margin-left: 5px;
  margin-right: 5px;
}
.container .comment .reply .item .reply-bottom {
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-size: 12px;
  color: #909399;
}
.container .comment .reply .item .reply-bottom .reply-text {
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
}
.container .comment .reply .item .reply-bottom .reply-text:hover {
  color: #333;
}
.container .comment .reply .item .reply-bottom .reply-text .icon-comment {
  margin-right: 5px;
}
.container .comment .reply .write-reply {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #909399;
  padding: 10px;
  cursor: pointer;
}
.container .comment .reply .write-reply:hover {
  color: #303133;
}
.container .comment .reply .write-reply .el-icon-edit {
  margin-right: 5px;
}
.container .comment .reply .fade-enter-active,
.container .comment .reply fade-leave-active {
  transition: opacity 0.5s;
}
.container .comment .reply .fade-enter,
.container .comment .reply .fade-leave-to {
  opacity: 0;
}
.container .comment .reply .input-wrapper {
  padding: 10px;
}

.container .comment .reply .input-wrapper .btn-control {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
}
.container .comment .reply .input-wrapper .input-control {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
}
.container .comment .reply .input-wrapper .input-control .input {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 5px;
}
.container .comment .reply .input-wrapper .btn-control .cancel {
  font-size: 16px;
  color: #606266;
  margin-right: 20px;
  cursor: pointer;
}
.container .comment .reply .input-wrapper .btn-control .cancel:hover {
  color: #333;
}
.container .comment .reply .input-wrapper .btn-control .confirm {
  font-size: 16px;
}
.fatherInput {
  margin-top: 50px;
}
.fatherInput .input-wrapper {
  padding: 10px;
}

.fatherInput .input-wrapper .btn-control {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
}
.fatherInput .input-wrapper .input-control {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
}
.fatherInput .input-wrapper .input-control .input {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 5px;
}
.fatherInput .input-wrapper .btn-control .cancel {
  font-size: 16px;
  color: #606266;
  margin-right: 20px;
  cursor: pointer;
}
.fatherInput .input-wrapper .btn-control .cancel:hover {
  color: #333;
}
.fatherInput .input-wrapper .btn-control .confirm {
  font-size: 16px;
}
.comment_input{
  border-radius: 10px;
  width: 700px;
  margin-top: 3px;
  background-color: #f0f0f0;
  color: #2b2b2b;
  border-style: none;
  height: 45px;
  padding-left: 20px;
}
.input_button{
  border-radius: 8px;
  background-color: #add5f7;
  color: white;
  font-size: 16px;
  width: 70px;
  height: 40px;
  margin-top: 5px;
  margin-left: 20px;
  &:hover{
    background-color: #71b8f5;
    font-weight: bold;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
  }
}
</style>
