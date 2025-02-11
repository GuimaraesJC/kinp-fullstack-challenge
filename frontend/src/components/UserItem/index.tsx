import { UserProps } from "../../services/users/types"

interface IUserProps {
  user: UserProps
}

const UserItem = ({ user }: IUserProps) => {
  return (
    <li className="flex justify-between gap-x-6 py-5 cursor-pointer">
      <div className="flex min-w-0 gap-x-4">
        <img className="size-12 flex-none rounded-full" src="avatar.png" alt={`${user.name}'s profile picture`} />
          <div className="min-w-0 flex-auto text-left">
            <p className="text-sm/6 font-semibold text-gray-900">{user.name}</p>
            <p className="mt-1 truncate text-xs/5 text-gray-500">{user.email}</p>
          </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm/6 text-gray-900">{user.company.name}</p>
        <p className="mt-1 text-xs/5 text-gray-500">{user.email}</p>
      </div>
    </li>
  )
}

export default UserItem
