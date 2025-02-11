import { useParams } from 'react-router'
import { useFetchAlbums } from '../../services/users/useUsers'
import AlbumItem from '../../components/AlbumItem'

// usar enabled



const AlbumsPage = () => {
  const { userId } = useParams<{ userId: string }>()

  const { data, isLoading } = useFetchAlbums(userId ?? '')

  console.log(data)

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="max-w-screen-md mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {data?.map((album) => (
            <AlbumItem key={album.id} album={album} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default AlbumsPage
