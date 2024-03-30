'use client'

import { type FC, type MouseEvent } from 'react'
import { CheckIcon } from './icons'

interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isActive: boolean
  name: string
  id?: string
}

export const ButtonCheck: FC<Props> = ({ id, name, onClick, isActive }) => {
  return (
    <button
      className={`p-[2px] border border-gray-500/20 rounded-md transition-colors ${isActive ? 'bg-blue-950/45' : ''}`}
      name={name}
      id={id}
      onClick={(e: any) => { onClick(e) }}
    >
      <CheckIcon className={`w-4 h-4 transition-colors ${isActive ? 'stroke-blue-500' : ''}`} />
    </button>
  )
}
