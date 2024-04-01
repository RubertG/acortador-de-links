import { type Database, type TypeLink } from '@/types/database.types'
import Link from 'next/link'
import { type FC } from 'react'

interface Props {
  link: TypeLink
  visit: Database['public']['Tables']['visits_links']['Row']
}

export const VisitLinkRowTable: FC<Props> = ({ link, visit }) => {
  return (
    <tr className="text-gray-300 border-b border-Terziary last:border-b-0 text-sm">
      <td className="px-3 py-2 md:px-4 md:py-3 hover:bg-secondary transition-colors border-r border-Terziary">
        <Link
          className='hover:text-purple-400 transition-colors'
          href={link.short_url}
        >
          {link.short_url}
        </Link>
      </td>
      <td className="px-3 py-2 md:px-4 md:py-3 hover:bg-secondary transition-colors border-r border-Terziary">
        <Link
          className='hover:text-purple-400 transition-colors'
          href={link.url}
        >
          {link.url}
        </Link>
      </td>
      <td className="px-3 py-2 md:px-4 md:py-3 hover:bg-secondary transition-colors whitespace-nowrap">
        {new Date(visit.created_at).toLocaleDateString('es-CO', {
          minute: '2-digit',
          hour: '2-digit',
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })}
      </td>
    </tr>
  )
}
