import request from '../utils/request'

export function loginUrl (data = {}) {
  return request({
      method: 'POST',
      url: '/login',
      data,
    })
}

