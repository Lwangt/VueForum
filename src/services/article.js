import request from '../utils/request'

export function addArticle (data) {
  return request({
    method: 'POST',
    url: '/comment/addArticle',
    data,
  })
}

export function deleteArticle (data) {
  return request({
    method: 'POST',
    url: '/comment/deleteArticle',
    data,
  })
}

export function getArticleListByType (data) {
  return request({
    method: 'POST',
    url: '/article/getArticleListByType',
    data,
  })
}


