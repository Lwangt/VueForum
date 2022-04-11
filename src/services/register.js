import request from '../utils/request'

export function registerUrl (data = {}) {
  return request({
    method: 'POST',
    url: '/user/register',
    data,
  })
}

