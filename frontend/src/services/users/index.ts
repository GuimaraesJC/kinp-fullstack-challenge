import api from '../axios'
import { AlbumResponse, UserResponse } from './types'

export const fetchUsers = async () => {
  const response = await api.get<UserResponse>('/users')

  return response.data
}

export const fetchAlbums = async (userId: string) => {
  const response = await api.get<AlbumResponse>(`/users/${userId}/albums`)

  return response.data
}
