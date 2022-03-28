// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VRouter from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './components/Layout'
import IndexPage from './pages/IndexPage'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/book_details/analysis'
import DetailCountPage from './pages/book_details/count'
import DetailPubPage from './pages/book_details/publish'
import DetailForPage from './pages/book_details/forecast'
import OrderListPage from './pages/orderList'
import articalPage from './pages/articlePage'
import jsPage from './pages/article/jsPage'
import backPage from './pages/article/backPage'
import aiPage from './pages/article/aiPage'
import searchPage from './pages/searchPage'
import ArticleDetailPage from './pages/article_detail/article_detail'

import store from './store'

import 'github-markdown-css/github-markdown.css'
import hljs from 'highlight.js'

import "./style/typo.css"

// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

// Vue.config.productionTip = false
Vue.use(VRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
// Vue.use(mavonEditor)

Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

const cubic = value => Math.pow(value, 3);
const easeInOutCubic = value => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;
Vue.prototype.scrollToTop = function () {
  const el = document.documentElement
  const beginTime = Date.now()
  const beginValue = el.scrollTop
  const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
  const frameFunc = () => {
    const progress = (Date.now() - beginTime) / 500;
    if (progress < 1) {
      el.scrollTop = beginValue * (1 - easeInOutCubic(progress))
      rAF(frameFunc)
    } else {
      el.scrollTop = 0
    }
  }
  rAF(frameFunc)
}

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
  }
]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Layout },
  template: '<Layout/>'
})
