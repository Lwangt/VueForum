import request from '../utils/request'

export function loginUrl (data = {}) {
  return request({
      method: 'GET',
      url: '/login',
      data,
    })
}

