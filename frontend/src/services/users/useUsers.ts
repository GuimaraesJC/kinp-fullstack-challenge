import { useQuery } from '@tanstack/react-query'

import { fetchUsers } from '.'
import { UserResponse } from './types'
import { AxiosError } from 'axios'

export const useFetchUsers = () => {
  return useQuery<UserResponse[], AxiosError>({
    queryFn: fetchUsers,
    queryKey: ['fetchUsers'],
    refetchInterval: 10 * 60 * 1000, // 10 minutes in milliseconds
  })
}
