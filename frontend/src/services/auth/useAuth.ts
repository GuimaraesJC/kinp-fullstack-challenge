import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { signup } from '.'

export const useSignUp = () => {
  const navigate = useNavigate()

  return useMutation({
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
