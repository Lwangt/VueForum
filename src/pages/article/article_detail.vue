<template>
  <div >
    <el-row  type="flex"  style="width: 100%">
      <el-col :span="screenWidth>750?20:28">
        <el-row class="art-item">
          <el-card style="margin: 10px;border-radius: 12px">

            <div id="artcle-info">
              <div class="font-weight-800 fs30" style="color: #3c3c3c;">我是一个标题</div>
              <!-- 描述：文章信息 -->
              <div class="text-center timeAndView" style="color: #3c3c3c">
                <span class="article-time">
                  <i class="el-icon-time"></i>
                  发表于：
<!--                  <span>{{blog.create_time}}</span>-->
                  <span>2022.03.28</span>
                </span>
                &nbsp;|&nbsp;
                <span class="article-views">
                  <i class="el-icon-view"></i>
                  阅读量：
<!--                  <span>{{blog.blog_visits}}</span> -->
                  <span>12412</span>
                </span>
                <span class="article-views">
<!--                  <img class="love-icon" src="../assets/love2.png" alt />-->
                  点赞数：
<!--                  <span>{{blog.blog_like}}</span>-->
                  <span>52</span>
                </span>
                <span class="article-views">
                  <i class="el-icon-chat-dot-round"></i>
                  评论数：
<!--                  <span>{{blog.comment_cnt}}</span>-->
                  <span>213</span>
                </span>
              </div>
<!--              <p class="abstract">{{blog.blog_summary}}</p>-->
              <p class="abstract">关于博客页面测试的一句话</p>
            </div>


            <div class="js-toc-content">
              <div class="pl20" style="border-radius: 10px">
<!--                分析的文档区域-->
                <div class="markdown-body">
                  <VueMarkdown :source="blog.blog_content" v-highlight></VueMarkdown>
                </div>
              </div>
            </div>

<!--            <div-->
<!--              id="artcle-content"-->
<!--              class="typo js-toc-content m-padded-tb-small line-numbers match-braces rainbow-braces"-->
<!--              v-html="blog.blog_content"-->
<!--            ></div>-->

            <div id="articlebtn">
              <el-row>
                <el-tooltip class="love" content="点赞" placement="top">
                  <img @click="LikeBlog" class="icon" src="../../assets/dianzan.png" alt />
                </el-tooltip>
              </el-row>
            </div>

            <div id="statement">
<!--              <div class="item">原文作者：{{$store.state.siteInfo.blogName}}</div>-->
              <div class="item">原文作者：Lwangt</div>
              <div class="item">
                文章链接：
                <a href>{{url}}</a>
              </div>
              <div class="item">版权声明：本博客所有文章除特别声明外,转载请注明出处!</div>
            </div>

            <commentList />

          </el-card>
        </el-row>
      </el-col>
      <el-col :span="6" class="hidden-sm-and-down" id="side" style="margin: 10px;">
<!--        <div class="item">-->
<!--          <Introduction />-->
<!--        </div>-->
<!--        <div class="item">-->
<!--          <categorys />-->
<!--        </div>-->
<!--        <div class="item">-->
<!--          <tags />-->
<!--        </div>-->
<!--        <div class="item">-->
<!--          <FriendSider />-->
<!--        </div>-->
        <div class="item is-position-fixed">
          <!--只在文章页面显示目录-->
							<Tocbot />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Tocbot from "../../components/Tocbot";
import commentList from '../../components/Comment';
import VueMarkdown from 'vue-markdown'
export default {
  name: "article_detail",
  data() {
    return {
      // propsData: {
      //   blog_id: 0,
      //   page: 0
      // },
      blog: {
        blog_content:"# Redis学习总结\n" +
          "\n" +
          "## 1.简单介绍下Redis（Redis的含义和作用）\n" +
          "\n" +
          "**Redis**是一个使用c语音开发的数据库，不过与传统的数据库不同的是**Redis的数据是存储在内存中的**，也就是**Redis是内存数据库**，所以读写速度特别快，因此Redis被广泛应用于**缓存**方向。\n" +
          "\n" +
          "Redis除了做缓存外，也经常被用来做分布式锁，甚至是消息队列。\n" +
          "\n" +
          "Redis默认是有16个数据库。\n" +
          "\n" +
          "Redis提供了多种数据类型来支持不同的业务场景。Redis还支持事务，持久化，Lua脚本，多种集群方案。\n" +
          "\n" +
          "## 2.Redis一些简单命令的使用\n" +
          "\n" +
          "### 2.1 Redis性能测试\n" +
          "\n" +
          "**语法：**\n" +
          "\n" +
          "```java\n" +
          "redis-benchmark [option] [option value]\n" +
          "```\n" +
          "\n" +
          "**参数：**\n" +
          "\n" +
          "**实例：**\n" +
          "\n" +
          "、测试100个并发每秒10w个请求\n" +
          "\n" +
          "### 2.2 其他命令\n" +
          "\n" +
          "**选择不同的数据库：*select [num]***\n" +
          "\n" +
          "```java\n" +
          "> select 2\n" +
          "OK\n" +
          "```\n" +
          "\n" +
          "**查看当前数据库的所有key：*keys \\****"
      },
      screenWidth: document.body.clientWidth,
      url: window.location.href
    };
  },
  components:{
    Tocbot,
    commentList,
    VueMarkdown
  },
  computed: {
			blogId() {
				return parseInt(this.$route.params.article_id)
      },
      ...mapState(['siteInfo'])
		},
  beforeRouteEnter(to, from, next) {
			//路由到博客文章页面之前，应将文章的渲染完成状态置为 false
			next(vm => {
				// 当 beforeRouteEnter 钩子执行前，组件实例尚未创建
				// vm 就是当前组件的实例，可以在 next 方法中把 vm 当做 this用
				vm.$store.dispatch('setIsBlogRenderComplete', false)
			})
		},
  beforeRouteLeave(to, from, next) {
    // 从文章页面路由到其它页面时，销毁当前组件的同时，要销毁tocbot实例
    // 否则tocbot一直在监听页面滚动事件，而文章页面的锚点已经不存在了，会报"Uncaught TypeError: Cannot read property 'className' of null"
    tocbot.destroy()
    next()
  },
  beforeRouteUpdate(to, from, next) {
    // 一般有两种情况会触发这个钩子
    // ①当前文章页面跳转到其它文章页面
    // ②点击目录跳转锚点时，路由hash值会改变，导致当前页面会重新加载，这种情况是不希望出现的
    // 在路由 beforeRouteUpdate 中判断路径是否改变
    // 如果跳转到其它页面，to.path!==from.path 就放行 next()
    // 如果是跳转锚点，path不会改变，hash会改变，to.path===from.path, to.hash!==from.path 不放行路由跳转，就能让锚点正常跳转
    if (to.path !== from.path) {
      this.getBlog(to.params.blogId)
     // console.log(to.params.blogId)
      //只要路由路径有改变，且停留在当前Blog组件内，就把文章的渲染完成状态置为 false
      this.$store.dispatch('setIsBlogRenderComplete', false)
      next()
    }
  },
  methods: {
    getBlogId(){
      return this.$route.query.id;
    },
    getBlog(blogId = this.blogId) {
      const _this = this;
      // this.$axios.get("/blog/" + blogId).then(res => {
      //   // console.log(res.data.data)
      //   if(res.data.code===200){
      //             _this.blog = res.data.data;
      //   _this.propsData.blog_id = res.data.data.blog_id;
      //   _this.$nextTick(() => {
      //     Prism.highlightAll();
      //     this.$store.dispatch('setIsBlogRenderComplete', true)
      //   });
      //     document.title = this.blog.blog_title+this.siteInfo.webTitleSuffix
      //   }
      //
      // });
      this.$store.dispatch('setIsBlogRenderComplete', true)
      this.scrollToTop();
      // console.log(blogId);
    },
    setCookie(key, value, expiredays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiredays);
      document.cookie =
        key +
        "=" +
        escape(value) +
        (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
    },
    getCookie(key) {
      if (document.cookie.length) {
        var cookies = " " + document.cookie;
        var start = cookies.indexOf(" " + key + "=");
        if (start == -1) {
          return null;
        }
        var end = cookies.indexOf(";", start);
        if (end == -1) {
          end = cookies.length;
        }
        end -= start;
        var cookie = cookies.substr(start, end);
        return unescape(
          cookie.substr(
            cookie.indexOf("=") + 1,
            cookie.length - cookie.indexOf("=") + 1
          )
        );
      } else {
        return null;
      }
    },
    LikeBlog() {
      const _this = this;
      if (_this.getCookie("likeblog" + blogId) == null) {
        this.$axios.post("/likeBlog/" + blogId).then(res => {
          _this.$message.success(res.data.msg);
          _this.setCookie("likeblog" + blogId, blogId, 365);
        });
      } else {
        _this.$message.warning("你已经点赞了");
      }
    }
  },
  created(){
    this.getBlog();
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };

    console.log("article_id = "+this.$route.query.id)

  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          // console.log(that.screenWidth)
          that.timer = false;
        }, 400);
      }
    }
  }
};
</script>

<style lang="scss">
.is-position-fixed {
    position: -webkit-sticky!important;
    position: sticky!important;
    top: 60px;
}
a {
  color: #3399ea;
}
#side .item {
  margin-bottom: 30px;
}
#artcle-info {
  padding: 20px;
  margin-bottom: 40px;
  color: #3c3c3c;
}
.article-views {
  padding-right: 10px;
}
#artcle-info .abstract {
  color: #ffffff;
  border-left: 4px solid #3b98ea;
  padding: 10px;
  background-color: rgba(189, 191, 196, 0.3);
  border-radius: 0 12px 12px 0;
}

#artcle-info .timeAndView {
  padding: 20px;
  line-height: 30px;
  font-size: 16px;
  color: #ffffff;
}
#articlebtn {
  margin-top: 30px;
  text-align: center;
  margin-bottom: 40px;
}
pre.has {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.8);
}
img.has {
  width: 100%;
}
.icon {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  font-size: 18px;
  width: 40px;
  height: 40.4px;
  line-height: 42px;
  border-radius: 42px;
  color: rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  font-style: normal;
  margin: 0 3.2px;
}
#statement {
  border-left: 4px solid #429fd3;
  padding: 20px;
  background-color: #ebeef5;
  border-radius: 0 8px 8px 0;
  .item{
    padding: 5px;
  }
}
@media screen and (min-width: 320px) and (max-width: 750px) {
  .art-item {
    margin-top: 40px;
    position: relative;
    width: 312px;
  }
}
</style>
