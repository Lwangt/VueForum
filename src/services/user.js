import request from '../utils/request'

export function getUserNameById (data) {
  return request({
    method: 'POST',
    url: '/user/getUserNameById',
    data,
  })
}

export function disLikeArticle (data) {
  return request({
    method: 'POST',
    url: '/user/disLikeArticle',
    data,
  })
}
