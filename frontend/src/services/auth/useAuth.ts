import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import {
  SignUpRequestParams,
  SignUpResponse,
  LoginRequestParams,
  LoginResponse
} from './types'


import { signup, login } from '.'
import { AxiosError } from 'axios'

export const useSignUp = () => {
  const navigate = useNavigate()

  return useMutation<SignUpResponse, AxiosError, SignUpRequestParams>({
    mutationFn: signup,
    mutationKey: ['signup'],
    onSuccess: () => {
      navigate('/login')
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      alert(error.response?.data?.error || 'Signup failed')
    },
  })
}

export const useLogin = () => {
  const navigate = useNavigate()

  return useMutation<LoginResponse, AxiosError, LoginRequestParams>({
    mutationFn: login,
    mutationKey: ['login'],
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      navigate('/')
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      alert(error.response?.data?.error || 'Login failed')
    },
  })
}
