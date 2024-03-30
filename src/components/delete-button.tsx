'use client'

import { type FC } from 'react'
import { TrashIcon } from './icons'

interface Props {
  handlePopup: () => void
  isSelectedLinks: boolean
  className?: string
}

export const DeleteButton: FC<Props> = ({ handlePopup, isSelectedLinks, className = '' }) => {
  return (
    <button
      className={`flex items-center justify-center hover:scale-125 transition-all group ${isSelectedLinks ? 'opacity-100 z-0' : 'opacity-0 -z-50'} ${className}`}
      onClick={handlePopup}
    >
      <TrashIcon className='w-6 h-6 stroke-gray-300 transition-colors group-hover:stroke-red-700' />
    </button>
  )
}
