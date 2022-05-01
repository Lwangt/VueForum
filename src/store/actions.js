import {
  SAVE_SITE_INFO,
  SAVE_INTRODUCTION,
  SET_IS_BLOG_RENDER_COMPLETE,
  STORE_USER_MESSAGE,
  STORE_ARTICLE_MESSAGE
} from "./mutations-types";


export default {
	saveSiteInfo({commit}, siteInfo) {
		commit(SAVE_SITE_INFO, {siteInfo})
	},
	saveIntroduction({commit}, introduction) {
		commit(SAVE_INTRODUCTION, {introduction})
	},
	setIsBlogRenderComplete({commit}, ok) {
		commit(SET_IS_BLOG_RENDER_COMPLETE, {ok})
	},
  storeUserMessage({commit}, user) {
    commit(STORE_USER_MESSAGE, {user})
  },
  storeArticleMessage({commit}, article) {
    commit(STORE_ARTICLE_MESSAGE, {article})
  }
}
