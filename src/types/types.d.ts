import { type TypeLink, type TypeLinkWithUser } from './database.types'

export interface TypeStatePublicLinks {
  links: TypeLinkWithUser[]
  filterLinks: TypeLinkWithUser[]
}

export interface TypeStateUserLinks {
  links: TypeLink[]
  filterLinks: TypeLink[]
}
