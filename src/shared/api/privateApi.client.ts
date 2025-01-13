import { onResponseErrorClient } from './interceptor.client'
import { CustomInstance } from './types'

import axios from 'axios'
import { BASE_URL } from './const'
import { onResponse } from './interceptor'
import { onRequestClient } from './interceptor.client'

export const privateApi: CustomInstance = axios.create({
  baseURL: BASE_URL,
})

privateApi.defaults.timeout = 2500

privateApi.interceptors.request.use(onRequestClient)

privateApi.interceptors.response.use(onResponse, onResponseErrorClient)
