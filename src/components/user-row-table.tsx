import { TypeLink } from '@/types/database.types'
import { RedirectIcon } from './icons'
import Link from 'next/link'

export const UserRowTable = ({ link }: { link: TypeLink }) => {
  return (
    <tr className="text-gray-300 border-b border-Terziary last:border-b-0 text-sm" key={link.id}>
      <td className="px-3 py-2 md:px-4 md:py-3 border-r border-Terziary hover:bg-secondary transition-colors">
        <Link
          className='hover:text-purple-400 transition-colors'
          href={link.short_url}
        >
          {link.url}
        </Link>
      </td>
      <td className="px-3 py-2 md:px-4 md:py-3 border-r border-Terziary hover:bg-secondary transition-colors">
        <Link
          className='hover:text-purple-400 transition-colors'
          href={link.short_url}
        >
          {link.short_url}
        </Link>
      </td>
      <td className="px-3 py-2 md:px-4 md:py-3 hover:bg-secondary transition-colors border-r border-Terziary">
        {new Date(link.created_at).toLocaleDateString('es-CO')}
      </td>
      <td
        className='hover:bg-secondary transition-colors'
      >
        <Link
          className='px-3 py-2 md:px-4 md:py-3 flex items-center justify-center gap-1 text-white font-medium group'
          href={`/link/${link.id}`}
        >
          <p
            className='group-hover:text-purple-400 transition-colors'
          >Ver más</p>
          <RedirectIcon className='w-7 h-7 fill-white group-hover:fill-purple-400 transition-colors' />
        </Link>
      </td>
    </tr>
  )
}
