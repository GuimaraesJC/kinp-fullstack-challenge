import api from '../axios'
import {
  SignUpRequestParams,
  SignUpResponse,
  LoginRequestParams,
  LoginResponse
} from './types'



export const signup = async ({ name, email, password }: SignUpRequestParams) => {
  const response = await api.post<SignUpResponse>('/auth/signup', { name, email, password })

  return response.data
}

export const login = async ({ email, password }: LoginRequestParams) => {
  const response = await api.post<LoginResponse>('/auth/login', { email, password })

  return response.data
}
