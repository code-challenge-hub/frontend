// // src/shared/api/base.ts
// import axios, {
//   AxiosError,
//   AxiosResponse,
//   InternalAxiosRequestConfig,
// } from 'axios'
// import { cookies } from 'next/headers'

// export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api/v1/'

// // 서버 사이드용 API 인스턴스
// export const createServerApi = async () => {
//   const api = axios.create({
//     baseURL: BASE_URL,
//     timeout: 5000,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })

//   // 서버 사이드에서는 쿠키를 직접 가져와서 사용
//   const cookieStore = await cookies()
//   const token = cookieStore.get('token')?.value

//   if (token) {
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`
//   }

//   return api
// }

// // 클라이언트 사이드용 API 인스턴스
// export const createClientApi = () => {
//   const api = axios.create({
//     baseURL: BASE_URL,
//     timeout: 5000,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })

//   api.interceptors.request.use(
//     (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
//       // 클라이언트에서는 쿠키를 자동으로 포함
//       config.withCredentials = true
//       return config
//     },
//     (error) => {
//       return Promise.reject(error)
//     },
//   )

//   api.interceptors.response.use(
//     (response: AxiosResponse): AxiosResponse => response,
//     async (error: AxiosError | Error): Promise<AxiosError> => {
//       if (axios.isAxiosError(error) && error.response?.status === 401) {
//         // 토큰 갱신 로직
//         try {
//           await axios.post('/api/auth/refresh')
//           // return api.request(error.config)
//           if (error.config) {
//             return api.request(error.config)
//           }
//           throw error
//         } catch {
//           // 갱신 실패시 로그아웃
//           window.location.href = '/login'
//         }
//       }
//       return Promise.reject(error)
//     },
//   )

//   return api
// }

// // 사용할 때는 환경에 따라 다른 인스턴스 생성
// export const api =
//   typeof window !== 'undefined' ? createClientApi() : await createServerApi()
