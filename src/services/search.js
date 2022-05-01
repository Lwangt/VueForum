import request from '../utils/request'

export function searchByArticleTitle (data) {
  return request({
    method: 'POST',
    url: '/searchByArticleTitle',
    data,
  })
}

export function searchByArticleIntroduction (data) {
  return request({
    method: 'POST',
    url: '/searchByArticleIntroduction',
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
