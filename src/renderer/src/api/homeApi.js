import Request from '../utils/Request'

export const getBlog = (params) =>
  Request({
    url: '/blog/get',
    params: {
      ...params
    }
  })
