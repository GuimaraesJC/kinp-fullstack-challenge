import api from '../axios'

type SignUpRequestParams = {
  name: string
  email: string
  password: string
}

export const signup = async ({ name, email, password }: SignUpRequestParams) => {
  const response = await api.post('/auth/signup', { name, email, password })

  return response.data
}

export const login = async ({ email, password }: { email: string; password: string }) => {
   const response = await api.post('/auth/login', { email, password })

   return response.data
}
