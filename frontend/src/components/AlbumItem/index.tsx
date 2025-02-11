import { AlbumProps } from '../../services/users/types'

interface IAlbumProps {
  album: AlbumProps
}

// This URL gets a new image every time you refresh the page. It's a placeholder image service.
// Every album has the same cover, but it's a different image on every reload.
const IMG_URL = 'https://picsum.photos/300/300'

const AlbumItem = ({ album }: IAlbumProps) => {
  return (
    <div className="group pb-24 relative overflow-hidden">
      <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-[#007bff] z-10"></div>
      <img src={IMG_URL} className="transition-all group-hover:scale-125 duration-700 mr-4 h-60 w-auto" alt="Album cover" />
      <div className="bg-[#007bff] absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
        <h2 className="font-bold">
          Album #{album.id}
        </h2>
        <span className="text-white truncate">
          {album.title.substring(0, 20)}...
        </span>
      </div>
    </div>
  )
}

export default AlbumItem
