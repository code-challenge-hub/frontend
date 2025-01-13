import publicApi from '../../publicApi'

export const postEmailAuth = async (body: { email: string }) => {
  return publicApi.post('/auth/email', body)
}

export const postLoginAuth = async (body: {
  email: string
  password: string
}) => {
  return publicApi.post('/auth/login', body)
}

export const postSignupAuth = async (body: {
  email: string
  password: string
  nickname: string
  role: string
}) => {
  return publicApi.post('/auth/join', body)
}
