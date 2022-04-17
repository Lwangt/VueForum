<template>
  <div class="container">
    <div class="fs22 pl5">评论区</div>
    <div class="ml10 mt20 flex" v-for="item in comments">
      <div class="mr15" style="width: 50px;height: 50px;background-color: #8ccded;margin-top: 2px">
      </div>
      <div class="flex flex-direction-column">
       <div class="flex" style="margin-top: 20px;">
         <div >{{item.nickName}}</div>
         <div class="ml20" style="color: #cccccc">{{item.createTime}}</div>
       </div>
        <div class="mt15">
          <div>{{item.content}}</div>
        </div>
        <div class="mt15">
          <div @click="huifu()" style="color: #96e6dd;font-size: 15px;cursor:pointer">回复</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {addComment} from "../services/comment";
import {deleteComment} from "../services/comment";
import {getCommentListByArticleId} from "../services/comment";

export default {
  name: "comment",
  props: {
    objectData: {
      type: Object
    },
    required: true
  },
  data() {
    return {
      comments: {
      },
      article_id: this.$route.query.id,
      blog_id: 0,
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



    huifu(){

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

</style>
