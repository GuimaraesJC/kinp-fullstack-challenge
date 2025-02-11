import UserItem from '../../components/UserItem'
import { useFetchUsers } from '../../services/users/useUsers'

const UsersPage = () => {
  const { data, isLoading } = useFetchUsers()

  console.log(data, isLoading)

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data?.map((user) => (
        <UserItem key={user.id} user={user}  />
      ))}
    </ul>
  )
}

export default UsersPage
