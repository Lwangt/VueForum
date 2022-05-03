import request from '../utils/request'

export function addArticle (data) {
  return request({
    method: 'POST',
    url: '/article/addArticle',
    data,
  })
}

export function deleteArticle (data) {
  return request({
    method: 'POST',
    url: '/article/deleteArticle',
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

export function getArticleByList (data) {
  return request({
    method: 'POST',
    url: '/article/getArticleByList',
    data,
  })
}

export function getArticleListRandom (data) {
  return request({
    method: 'GET',
    url: '/article/getArticleListRandom',
    data,
  })
}



