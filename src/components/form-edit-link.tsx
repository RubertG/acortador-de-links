'use client'

import { type FC } from 'react'
import { ConfirmPopup } from './confirm-popup'
import { type TypeLink } from '@/types/database.types'
import { CopyIcon } from './icons'
import { ButtonForm } from './button-form'
import { ErrorForm } from './error-form'
import { DeleteButton } from './delete-button'
import { useFormEditLinks } from '@/hooks/use-form-edit-links'

interface Props {
  link: TypeLink
}

export const FormEditLink: FC<Props> = ({ link }) => {
  const {
    formAction, formRef, handleChangeName,
    handleClickCopy, name, state, loading,
    handlePopup, handleDelete, popup
  } = useFormEditLinks({ link })

  return (
    <>
      <ConfirmPopup
        cancel={handlePopup}
        deleteLink={handleDelete}
        isActivated={popup}
        loading={loading}
      />
      <form
        action={formAction}
        ref={formRef}
        className='border border-Terziary rounded-lg shadow-table shadow-Terziary/50 p-3 md:p-5 max-w-lg m-auto'
      >
        <label>
          <input
            type='text'
            name='name'
            id={link.id}
            placeholder='Nombre del enlace'
            defaultValue={link.name}
            onChange={handleChangeName}
            className='rounded-md text-sm md:text-base py-2 px-3 bg-secondary w-full focus:outline-none focus:outline-1 focus:outline-Terziary placeholder:text-gray-400 text-gray-300'
          />
          <div
            className='flex items-center justify-between w-full py-3 md:py-4 px-3'
          >
            <p
              className='text-ellipsis whitespace-nowrap overflow-hidden text-sm text-gray-400'
            >
              {process.env.NEXT_PUBLIC_SITE_URL}
              <span className='text-white'>{name}</span>
            </p>
            <button
              type='button'
              className='transition-transform hover:scale-125'
              title='Copiar URL'
              onClick={handleClickCopy}
            >
              <CopyIcon className='w-5 h-5' color='#9ca3af' />
            </button>
          </div>
        </label>
        {
          state?.message !== '' && <ErrorForm message={state?.message} />
        }
        <footer
          className='flex gap-2 items-center justify-center mt-2'
        >
          <ButtonForm text='Editar enlace' />
          <DeleteButton handlePopup={handlePopup} isSelectedLinks />
        </footer>
      </form>
    </>
  )
}
