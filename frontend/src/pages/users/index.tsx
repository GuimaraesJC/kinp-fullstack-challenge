import { Link } from 'react-router'
import UserItem from '../../components/UserItem'
import { useFetchUsers } from '../../services/users/useUsers'

const UsersPage = () => {
  const { data, isLoading } = useFetchUsers()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data?.map((user) => (
        <Link to={`/${user.id}/albums`} key={user.id}>
          <UserItem key={user.id} user={user} />
        </Link>
      ))}
    </ul>
  )
}

export default UsersPage
