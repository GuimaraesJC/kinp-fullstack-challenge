import { useQuery } from '@tanstack/react-query'

import { fetchAlbums, fetchUsers } from '.'
import { AlbumResponse, UserResponse } from './types'
import { AxiosError } from 'axios'

const REFETCH_INTERVAL = 10 * 60 * 1000 // 10 minutes in milliseconds

export const useFetchUsers = () => {
  return useQuery<UserResponse, AxiosError>({
    queryFn: fetchUsers,
    queryKey: ['fetchUsers'],
    refetchInterval: REFETCH_INTERVAL
  })
}

export const useFetchAlbums = (userId: string) => {
  return useQuery<AlbumResponse, AxiosError>({
    queryFn: () => fetchAlbums(userId),
    queryKey: ['fetchAlbums', userId],
    refetchInterval: REFETCH_INTERVAL,
    enabled: !!userId
  })
}
