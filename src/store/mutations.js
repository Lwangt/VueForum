import {
  SAVE_SITE_INFO,
  SAVE_INTRODUCTION,
  SET_IS_BLOG_RENDER_COMPLETE,
  STORE_USER_MESSAGE,
  STORE_ARTICLE_MESSAGE
} from "./mutations-types";

export default {
	[SAVE_SITE_INFO](state, {siteInfo}) {
		state.siteInfo = siteInfo
	},
	[SAVE_INTRODUCTION](state, {introduction}) {
		state.introduction = introduction
	},
	[SET_IS_BLOG_RENDER_COMPLETE](state, {ok}) {
		state.isBlogRenderComplete = ok
	},
  [STORE_USER_MESSAGE](state, {user}) {
    state.userMessage = user
  },
  [STORE_ARTICLE_MESSAGE](state, {article}) {
    state.articleMessage = article
  },
  // 修改token，并将token存入localStorage
  changeLogin (state, user) {
    state.Authorization = user.Authorization;
    localStorage.setItem('Authorization', user.Authorization);
  }
}
