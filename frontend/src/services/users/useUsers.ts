import { useQuery } from '@tanstack/react-query'

import { fetchUsers } from '.'

export const useFetchUsers = () => {
  return useQuery({
    queryFn: fetchUsers,
    queryKey: ['fetchUsers'],
    refetchInterval: 10 * 60 * 1000, // 10 minutes in milliseconds
  })
}
