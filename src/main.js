// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VRouter from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './components/Layout'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import router from './router'

import 'github-markdown-css/github-markdown.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import hljs from 'highlight.js'

import "./style/typo.css"

// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

// Vue.config.productionTip = false


Vue.use(VRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(mavonEditor)

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
};

Vue.prototype.bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Layout },
  template: '<Layout/>'
})
