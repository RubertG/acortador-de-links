'use client'

import { type FC } from 'react'
import { BackIcon } from './icons'
import { useRouter } from 'next/navigation'

interface Props {
  className?: string
}

export const BackButton: FC<Props> = ({ className = '' }) => {
  const router = useRouter()

  const handleClick = () => {
    router.back()
  }

  return (
    <button
      className={`${className} flex items-center justify-center text-purple-100 hover:text-purple-500 group gap-1 transition-colors`}
      onClick={handleClick}
    >
      <BackIcon className='fill-purple-100 w-5 h-5 group-hover:fill-purple-500 transition'/>
      Atrás
    </button>
  )
}
