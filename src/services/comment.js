import request from '../utils/request'

export function addComment (data) {
  return request({
    method: 'POST',
    url: '/comment/addComment',
    data,
  })
}

export function deleteComment (data) {
  return request({
    method: 'POST',
    url: '/comment/deleteComment',
    data,
  })
}

export function getCommentListByArticleId (data) {
  return request({
    method: 'POST',
    url: '/comment/getCommentListByArticleId',
    data,
  })
}

export function sendComment (data) {
  return request({
    method: 'POST',
    url: '/comment/sendComment',
    data,
  })
}
