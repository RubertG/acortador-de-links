import { type TypeLinkWithCheck, type TypeLinkWithUser } from './database.types'

export interface TypeStatePublicLinks {
  links: TypeLinkWithUser[]
  filterLinks: TypeLinkWithUser[]
}

export interface TypeStateUserLinks {
  links: TypeLinkWithCheck[]
  filterLinks: TypeLinkWithCheck[]
}

export interface TypeContextUserLinks {
  links: TypeLinkWithCheck[]
  reloadLinks: () => void
  loading: boolean
}
