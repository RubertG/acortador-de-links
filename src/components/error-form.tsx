import { type FC } from 'react'
import { DangerIcon } from './icons'

interface Props {
  message: string
}

export const ErrorForm: FC<Props> = ({ message }) => {
  return (
    <p
      className='py-2 px-3 text-center text-sm text-red-500 font-medium bg-red-950/20 border border-red-950 rounded-lg flex items-center justify-center gap-2 entry-animation'
    >
      <DangerIcon className='w-5 h-5' color='#ef4444' />
      {message}
    </p>
  )
}
