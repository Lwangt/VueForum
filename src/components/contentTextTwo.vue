<template>
    <div class="content">
        <div class="c-title" @click="gotoUserCenter(id)">{{name}}</div>
        <div class="c-text">{{intro}} </div>
        <div class="c-bottom">
            <i class="el-icon-star-on" ></i>
            <span class="collect">关注数：{{likeNum}}</span>
            <i class="el-icon-view" ></i>
            <span class="read">粉丝数：{{fanNum}}</span>
            <span class="author">{{sex}} </span>
            <span class="time">注册时间： {{time}}</span>
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
        'name',
        'intro',
        'time',
        'sex',
        'likeNum',
        'fanNum',
        'id'
    ],
  methods:{
    gotoUserCenter(idd){
      let routeData = this.$router.resolve({
        path: "/center",
        query:{
          id: idd
        }
      });

      //打开新页面
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

<style>
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
