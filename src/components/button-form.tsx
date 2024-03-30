'use client'

import { useFormStatus } from 'react-dom'
import { LoadingIcon } from './icons'
import { type FC } from 'react'

interface Props {
  text?: string
  className?: string
}

export const ButtonForm: FC<Props> = ({ text = 'Crear enlace', className = '' }) => {
  const { pending } = useFormStatus()

  return (
    <button
      aria-disabled={pending}
      className={`relative bg-purple-800 px-4 py-2 rounded-lg text-sm hover:bg-purple-950 transition-colors font-medium w-full ${className}`}
    >
      <p
        className={`transition-opacity ${!pending ? 'opacity-100' : 'opacity-0'}`}>
        {text}
      </p>
      <LoadingIcon
        className='w-10 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'
        loading={pending}
        color='#FFFF'
      />
    </button>
  )
}
