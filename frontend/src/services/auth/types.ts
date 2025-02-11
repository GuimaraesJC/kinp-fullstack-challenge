export type SignUpRequestParams = {
  name: string
  email: string
  password: string
}

export type SignUpResponse = {
  name: string
  email: string
  password: string
}

export type LoginRequestParams = {
  email: string
  password: string
}

export type LoginResponse = {
  token: string
  user: {
    id: number
    name: string
    email: string
  }
}
