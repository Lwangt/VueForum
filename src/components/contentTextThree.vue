<template>
  <div class="flex mt20">
    <div class="mr15" style="width: 50px;height: 50px;background-color: #8ccded;margin-top: 18px;border-radius: 8px">
    </div>
    <div class="flex flex-direction-column">
      <div class="flex" style="margin-top: 20px;">
        <div >{{nickName}}</div>
        <div class="ml20" style="color: #cccccc">{{createTime}}</div>
        <div style="color: #ced3d2;font-size: 15px;margin-top: 2px;">&nbsp&nbsp&nbsp&nbsp共{{commentCount}}条回复&nbsp&nbsp</div>
      </div>
      <div class="mt15">
        <div>{{content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{

      }
    },
    props:[
      'commentCount',
      'content',
      'nickName',
      'createTime',
    ],

  methods:{
  }
}
</script>

<style lang="scss" scoped>
.content{
    padding-top:20px;
    min-width: 650px;
    height: 130px;
}
.c-title{
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #212121;
    position: relative;
    vertical-align: middle;
    margin-bottom: 5px;
}
.c-title:hover{
    font-weight: bold;
    color: #4dd8f1;
    cursor: pointer;
}
.c-text{
    margin-bottom: 15px;
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
</style>
