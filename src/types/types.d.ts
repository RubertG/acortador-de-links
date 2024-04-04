import { type TypeVisitLink, type TypeLinkWithCheck, type TypeLinkWithUser } from './database.types'

export interface TypeStatePublicLinks {
  links: TypeLinkWithUser[]
  filterLinks: TypeLinkWithUser[]
}

export interface TypeStateUserLinks {
  links: TypeLinkWithCheck[]
  filterLinks: TypeLinkWithCheck[]
}

export interface TypeStateVisitsLinks {
  visitLink: TypeVisitLink[]
  filterVisitLink: TypeVisitLink[]
}

export interface TypeContextUserLinks {
  links: TypeLinkWithCheck[]
  reloadLinks: () => void
  loading: boolean
}

export type TypeItemsPagination = TypeLink[] | Array<{
  created_at: string
  id: string
  uid_link: string
}>

export interface TypeChartData {
  name: string
  clicks: number
}
