'use client'

import { useFormStatus } from 'react-dom'
import { LoadingIcon } from './icons'

export const ButtonForm = () => {
  const { pending } = useFormStatus()

  return (
    <button
      aria-disabled={pending}
      className='relative bg-purple-800 px-4 py-2 rounded-lg text-sm hover:bg-purple-950 transition-colors font-medium w-full mt-2'
    >
      <p
        className={`transition-opacity ${!pending ? 'opacity-100' : 'opacity-0'}`}>
        Crear enlace
      </p>
      <LoadingIcon
        className='w-10 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'
        loading={pending}
        color='#FFFF'
      />
    </button>
  )
}
