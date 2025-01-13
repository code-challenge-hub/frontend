// 인증이 필요없는 API
import axios from 'axios'

import { BASE_URL } from './const'
import { onResponse, onResponseError } from './interceptor'

const publicApi = axios.create({
  baseURL: BASE_URL,
})

publicApi.defaults.timeout = 2500

publicApi.interceptors.response.use(onResponse, onResponseError)

export default publicApi
