import { onResponseErrorServer } from './interceptor.server'

import axios from 'axios'
import { BASE_URL } from './const'
import { onResponse } from './interceptor'
import { onRequestServer } from './interceptor.server'
import { CustomInstance } from './types'

export const privateApi: CustomInstance = axios.create({
  baseURL: BASE_URL,
})

privateApi.defaults.timeout = 2500

privateApi.interceptors.request.use(onRequestServer)

privateApi.interceptors.response.use(onResponse, onResponseErrorServer)
