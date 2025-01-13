// 인증이 필요한 클라이언트 API 인터셉터
import { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { ErrorType } from './types'

interface AuthTokens {
  accessToken?: string
  refreshToken?: string
}

const getAuthTokensByCookie = (cookieString: string): AuthTokens => {
  const cookies = cookieString.split(';').reduce(
    (acc, cookie) => {
      const [key, value] = cookie.trim().split('=')
      return { ...acc, [key]: value }
    },
    {} as Record<string, string>,
  )

  return {
    accessToken: cookies['accessToken'],
    refreshToken: cookies['refreshToken'],
  }
}

export const onRequestClient = async (config: InternalAxiosRequestConfig) => {
  try {
    const auth = getAuthTokensByCookie(document.cookie)

    if (auth.accessToken) {
      config.headers.Authorization = `Bearer ${auth.accessToken}`
    }
    return config
  } catch (error) {
    return Promise.reject(error)
  }
}

export const onResponseErrorClient = async (
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
