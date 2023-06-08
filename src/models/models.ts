export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}
export interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface ServerResponse<T> {
  data: T[]
}

export interface Size {
  width: number | undefined
  // height: number | undefined
  SCREEN_SM: boolean
  SCREEN_LG: boolean
  countsPosts: number | undefined
}
