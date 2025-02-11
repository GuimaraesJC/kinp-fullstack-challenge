export type UserProps = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export type UserResponse = UserProps[]

export type AlbumProps = {
  userId: number
  id: number
  title: string
}

export type AlbumResponse = AlbumProps[]
