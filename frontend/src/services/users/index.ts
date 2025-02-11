import api from '../axios'
import { UserResponse } from './types'

export const fetchUsers = async () => {
  const response = await api.get<UserResponse>('/users')

  return response.data
}
