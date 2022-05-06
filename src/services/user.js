import request from '../utils/request'

export function getUserNameById (data) {
  return request({
    method: 'POST',
    url: '/user/getUserNameById',
    data,
  })
}

export function getUserById (data) {
  return request({
    method: 'POST',
    url: '/user/getUserById',
    data,
  })
}

export function editUser (data) {
  return request({
    method: 'POST',
    url: '/user/editUser',
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
