import request from '../utils/request'

export function getUserNameById (data) {
  return request({
    method: 'POST',
    url: '/user/getUserNameById',
    data,
  })
}

