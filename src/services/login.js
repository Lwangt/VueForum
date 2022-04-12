import request from '../utils/request'

export function loginUrl (data) {
  return request({
      method: 'POST',
      url: '/user/login',
      data,
    })
}

export function quitUrl (data) {
  return request({
    method: 'POST',
    url: '/user/quit',
    data,
  })
}
