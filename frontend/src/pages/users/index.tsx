import { useFetchUsers } from "../../services/users/useUsers"

const UsersPage = () => {
  const { data, isLoading } = useFetchUsers()

  console.log(data, isLoading)

  return (
    <div>
      <h1>Users</h1>
    </div>
  )
}

export default UsersPage
