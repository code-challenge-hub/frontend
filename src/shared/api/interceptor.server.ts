// 인증이 필요한 서버 API 인터셉터
import { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { cookies } from 'next/headers'
import { ErrorType } from './types'

export const onRequestServer = async (config: InternalAxiosRequestConfig) => {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}` // 헤더 설정
      return config
    }
    throw new Error('로그인이 필요합니다.')
  } catch (error) {
    return Promise.reject(error)
  }
}

export const onResponseErrorServer = async (
  error: AxiosError<ErrorType, InternalAxiosRequestConfig>,
) => {
  if (error.response) {
    const data = error.response.data
    const { statusCode } = data
    if (statusCode === 401) {
      // 토큰 관련 핸들링
    }
    // 서버에서 보낸 custom 에러 메세지가 없을 경우 기본 메세지를 에러 메세지로 전달
  }
  if (error.request) {
    console.log(error.request)
  } else {
    console.log('Error', error.message)
  }

  return Promise.reject(new Error('요청 도중 에러 발생'))
}
