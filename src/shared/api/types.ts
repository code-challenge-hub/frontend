import { AxiosInstance } from 'axios'

export interface ErrorType {
  statusCode: number
  message?: string
  error?: string
  timestamp?: string
}

export type CustomInstance = AxiosInstance
