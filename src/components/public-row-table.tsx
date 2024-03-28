import { type TypeLinkWithUser } from '@/types/database.types'
import Link from 'next/link'

export const PublicRowTable = ({ link }: { link: TypeLinkWithUser }) => {
  return (
    <tr className="text-gray-300 border-b border-Terziary last:border-b-0" key={link.id}>
      <td className="px-3 py-2 md:px-4 md:py-3 border-r border-Terziary hover:bg-secondary transition-colors">
        <div className="flex items-center text-sm lg:text-base">
          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src={link.user?.avatar_url}
              alt={link.user?.name}
              title={link.user?.name}
              loading="lazy" />
          </div>
          <div>
            <p className="font-medium">{link.user?.name}</p>
          </div>
        </div>
      </td>
      <td className="px-3 py-2 md:px-4 md:py-3 text-sm border-r border-Terziary hover:bg-secondary transition-colors">
        <Link
          className='hover:text-purple-400 transition-colors'
          href={link.short_url}
        >
          {link.short_url}
        </Link>
      </td>
      <td className="px-3 py-2 md:px-4 md:py-3 text-sm border-r border-Terziary hover:bg-secondary transition-colors">
        <a
          className='hover:text-purple-400 transition-colors'
          href={link.url}
          target='_blank' rel="noreferrer"
        >
          {link.url}
        </a>
      </td>
      <td className="px-3 py-2 md:px-4 md:py-3 text-sm hover:bg-secondary transition-colors">
        {new Date(link.created_at).toLocaleDateString('es-CO')}
      </td>
    </tr>
  )
}
