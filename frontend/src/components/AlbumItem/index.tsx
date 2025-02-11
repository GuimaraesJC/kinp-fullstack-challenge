import { AlbumProps } from '../../services/users/types'

interface IAlbumProps {
  album: AlbumProps
}

const AlbumItem = ({ album }: IAlbumProps) => {
  return (
    <div className="group pb-24 relative overflow-hidden">
      <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-[#007bff] z-10"></div>
      <img src="https://picsum.photos/300/300" className="transition-all group-hover:scale-125 duration-700 mr-4 h-60 w-auto" alt="" />
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
