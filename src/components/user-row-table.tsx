'use client'

import { type TypeLinkWithCheck } from '@/types/database.types'
import { RedirectIcon } from './icons'
import Link from 'next/link'
import { NAME_CHECKBOX } from '@/types/const'
import { type MouseEvent, type FC } from 'react'
import { ButtonCheck } from './button-check'

interface Props {
  link: TypeLinkWithCheck
  handleClick: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const UserRowTable: FC<Props> = ({ link, handleClick }) => {
  return (
    <tr className="text-gray-300 border-b border-Terziary last:border-b-0 text-sm">
      <td className="px-3 py-2 md:px-4 md:py-3 hover:bg-secondary transition-colors border-r border-Terziary text-center">
        <div
          className='grid place-content-center'
        >
          <ButtonCheck
            isActive={link.isCheck}
            onClick={handleClick}
            id={link.id}
            name={NAME_CHECKBOX.children}
          />
        </div>
      </td>
      <td className="px-3 py-2 md:px-4 md:py-3 border-r border-Terziary hover:bg-secondary transition-colors whitespace-nowrap">
        <Link
          className='hover:text-purple-400 transition-colors'
          href={link.url}
        >
          {link.url}
        </Link>
      </td>
      <td className="px-3 py-2 md:px-4 md:py-3 border-r border-Terziary hover:bg-secondary transition-colors whitespace-nowrap">
        <Link
          className='hover:text-purple-400 transition-colors'
          href={link.short_url}
        >
          {link.short_url}
        </Link>
      </td>
      <td
        className='hover:bg-secondary transition-colors'
      >
        <Link
          className='px-3 py-2 md:px-4 md:py-3 flex items-center justify-center gap-1 text-white font-medium group'
          href={`dashboard/link/${link.id}`}
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
