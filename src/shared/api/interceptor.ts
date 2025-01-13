// 인증이 필요없는 API 인터셉터
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ErrorType } from './types'

export const onResponse = (res: AxiosResponse): AxiosResponse => {
  return res
}

export const onResponseError = async (
  error: AxiosError<ErrorType, InternalAxiosRequestConfig>,
) => {
  if (error.request) {
    console.log(error.request)
  } else {
    console.log('Error', error.message)
  }
  return Promise.reject(new Error('요청 도중 에러 발생'))
}
