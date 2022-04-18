
import VRouter from "vue-router";
import IndexPage from "../pages/IndexPage";
import OrderListPage from "../pages/orderList";
import articalPage from "../pages/articlePage";
import jsPage from "../pages/article/jsPage";
import backPage from "../pages/article/backPage";
import aiPage from "../pages/article/aiPage";
import DetailPage from "../pages/detail";
import DetailAnaPage from "../pages/book_details/analysis";
import DetailCountPage from "../pages/book_details/count";
import DetailForPage from "../pages/book_details/forecast";
import DetailPubPage from "../pages/book_details/publish";
import searchPage from "../pages/searchPage";
import ArticleDetailPage from "../pages/article/article_detail";
import addArticle from "../pages/article/addArticle"

let router=new VRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    },
    {
      path:'/orderList',
      component:OrderListPage
    },
    {
      path:'/article',
      component:articalPage,
      redirect:'/article/js',
      children:[
        {
          path:'js',
          component:jsPage
        },
        {
          path:'back',
          component:backPage
        },
        {
          path:'ai',
          component:aiPage
        }
      ]
    },
    {
      path:'/detail',
      component:DetailPage,
      redirect:'/detail/analysis',
      children:[
        {
          path:'analysis',
          component:DetailAnaPage
        },
        {
          path:'count',
          component:DetailCountPage
        },
        {
          path:'forecast',
          component:DetailForPage
        },
        {
          path:'publish',
          component:DetailPubPage
        }
      ]
    },
    {
      path:'/search/:searchText',
      component:searchPage
    },
    {
      path:'/articleDetail',
      component:ArticleDetailPage
    },
    {
      path:'/addArticle',
      component:addArticle
    }
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');

    if (token === null || token === '') {
      alert("请先登录~");
      next('/');
    } else {
      next();
    }
  }
})


export default router;
