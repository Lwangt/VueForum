import request from '../utils/request'

export function getUserLikeArticleListById (data) {
  return request({
    method: 'POST',
    url: '/user/getUserLikeArticleListById',
    data,
  })
}

