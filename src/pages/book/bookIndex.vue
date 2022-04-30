<template>
  <div>
    <div style="width: 900px;padding-left: 20%">
      <slide-show :slides="slides" :inv="3000" ></slide-show>

      <div style="margin-top: 50px; margin-bottom: 30px; margin-left: 20px;">
        <div style="color: white;font-weight: bold;border-radius: 7px;background-color: #7eb6ed;padding: 12px;">· 今日书籍推荐</div>
      </div>

      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item,index) in boardList" :key="item.id"
          :class="[{'line-last':index % 2 !==0},'index-board-'+item.id]">
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <a href="detail/analysis" class="button">立即购买</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import slideShow from '../../components/slideShow'

export default {
  components:{
    slideShow
  },

  data(){
    return{
      slides: [
        {
          src: require('../../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'detail/publish'
        },
        {
          src: require('../../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        },

      ],
      boardList:[
        {   id:'car',
          title:'深入浅出Vue.js',
          description:"本书从源码层面分析了Vue.js。首先，简要介绍了Vue.js；然后详细讲解了其内部核心技术“变化侦测”，这里带领大家从0到1实现一个简单的“变化侦测”系统；",
          saleout:false
        },
        {   id:'earth',
          title:'Node.js源码分析',
          description:"本书从不同的视角介绍了 Node 内在的特点和结构。由首章Node 介绍为索引，涉及Node 的各个方面，主要内容包含模块机制的揭示、异步I/O 实现原理的展现、异步编程的探讨",
          saleout:false
        },
        {   id:'loud',
          title:'JavaScript高级程序设计（第3版）',
          description:"ECMAScript 5 和HTML5 在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript 增添了很多适应未来发展的新特性。",
          saleout:false
        },
        {   id:'hill',
          title:'Spring Boot实战',
          description:"本书以Spring应用程序开发为中心，全面讲解如何运用Spring Boot提高效率，使应用程序的开发和管理更加轻松有趣。作者行文亲切流畅，以大量示例讲解了Spring Boot在各类情境中的应用",
          saleout:false
        }
      ],
      newsList:[],
      productList:{
        pc:{
          id:1,
          title:'技术频道',
          list:[
            {
              src: require('../../assets/icon/js.png'),
              name:'前端',
              url:'/article/js'
            },
            {
              src: require('../../assets/icon/back.png'),
              name:'后端',
              url:'/article/back',

            },
            {
              src: require('../../assets/icon/ai.png'),
              name:'人工智能',
              url:'/article/ai',
              hot:true
            },
            {
              src: require('../../assets/icon/area.png'),
              name:'区块链',
              url:'www.baidu.com'
            },
            {
              src: require('../../assets/icon/wx.png'),
              name:'小程序',
              url:'www.baidu.com'
            },
            {
              src: require('../../assets/icon/safe.png'),
              name:'安全',
              url:'www.baidu.com'
            },
            {
              src: require('../../assets/icon/ios.png'),
              name:'ios',
              url:'www.baidu.com'
            },
            {
              src: require('../../assets/icon/tool.png'),
              name:'工具',
              url:'www.baidu.com'
            },
          ]
        },

      }
    }
  },

  methods:{
    goToPage() {
      let routeData = this.$router.resolve({
        path: "/addArticle",
      });

      //打开新页面
      window.open(routeData.href, '_blank');
    },
  }
}
</script>


<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 240px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #488bcd;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 6px;
  font-weight: bold;
}
.index-left-block h3 {
  font-size: 14px;
  padding: 0 15px 5px 15px;
  color: #212121;
}
.index-left-block ul {
  padding: 10px 15px;
  text-shadow: 0 0 black;
  background-color: white;
  line-height: 30px;
  color: #757575;
  padding-left: 30px;
  font-size: 14px;

}
.h3-line{
  color: #d4d4d4;
}
.index-left-block li {
  padding: 7px;
  border-radius: 10px;
}
.index-left-block li:hover {
  background-color: #bbe6ee;
}
.left-img{
  display:inline-block;
  vertical-align: middle;
}
.left-a{

  display: inline-block;
  margin-left: 10px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 200px;
  padding-left: 180px;
  position: relative;
}
.index-board-car .index-board-item-inner{
  background: url(../../assets/images/1.png) no-repeat;
  background-size: 150px;
}
.index-board-loud .index-board-item-inner{
  background: url(../../assets/images/2.png) no-repeat;
  background-size: 150px;
}
.index-board-earth .index-board-item-inner{
  background: url(../../assets/images/3.png) no-repeat;
  background-size: 150px;
}
.index-board-hill .index-board-item-inner{
  background: url(../../assets/images/4.png) no-repeat;
  background-size: 150px;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.index-board-item p{
  font-size: 12px;
  width: 200px;
  line-height: 20px;
}

.line-last {
  margin-right: 0;
}
.index-board-button {
  position: absolute;
  bottom: 0px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot-tag{
  background-color: red;
  color: #fff;
}
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
