import request from '../utils/request'

export function searchByArticleTitle (data) {
  return request({
    method: 'POST',
    url: '/searchByArticleTitle',
    data,
  })
}

export function searchByArticleContent (data) {
  return request({
    method: 'POST',
    url: '/searchByArticleContent',
    data,
  })
}

export function searchByUserName (data) {
  return request({
    method: 'POST',
    url: '/searchByUserName',
    data,
  })
}

export function searchByComment (data) {
  return request({
    method: 'POST',
    url: '/searchByComment',
    data,
  })
}
