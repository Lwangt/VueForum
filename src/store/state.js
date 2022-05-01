export default {
	siteInfo: '',
	introduction: {
		avatar: '',
		name: '',
		rollText: [],
	},
	//博客文章渲染完成的标记
	isBlogRenderComplete: false,

  // // 存储token
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',

  //用户信息
  userMessage:{
	  id:null,
	  name:'',
    password:'',
  },

  //文章信息
  articleMessage:{
  }
  // searchItem:'',

}
