'use client'

import { type FC } from 'react'
import { LoadingIcon } from './icons'

interface Props {
  cancel: () => void
  deleteLink: () => void
  isActivated: boolean
  loading: boolean
}

export const ConfirmPopup: FC<Props> = ({ cancel, isActivated, deleteLink, loading }) => {
  return (
    <main
      className={`fixed top-0 left-0 bg-primary/95 h-dvh w-full transition-opacity grid place-content-center ${isActivated ? ' opacity-100 z-50' : '-z-50 opacity-0'}`}
    >
      <section
        className='bg-secondary shadow-table shadow-Terziary/50 py-4 border border-Terziary rounded-lg min-w-80'
      >
        <h3
          className='text-xl font-medium pb-3 text-center border-b border-Terziary px-4'
        >Confirme para eliminar</h3>
        <p
          className='mt-3 text-gray-300 text-sm px-4'
        >¿Estás seguro de eliminar los seleccionados?</p>
        <footer
          className='px-4 mt-3'
        >
          <button
            className='text-white bg-[#24292F] hover:bg-[#24292F]/70 rounded-lg text-sm px-4 py-2 text-center transition-colors mr-2'
            onClick={cancel}
          >Cancelar</button>
          <button
            className='relative bg-red-800 px-4 py-2 rounded-lg text-sm hover:bg-red-950 transition-colors font-medium text-white'
            onClick={deleteLink}
          >
            <p
            className={`transition-opacity ${!loading ? 'opacity-100' : 'opacity-0'}`}
            >Eliminar</p>
            <LoadingIcon
              className='w-10 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'
              loading={loading}
              color='#FFFF'
            />
          </button>
        </footer>
      </section>
    </main>
  )
}
