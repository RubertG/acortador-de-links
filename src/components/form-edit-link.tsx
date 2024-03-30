'use client'

import { type FC, useState } from 'react'
import { ConfirmPopup } from './confirm-popup'
import { useSupabaseClient } from '@/utils/supabase/client'
import { type TypeLink } from '@/types/database.types'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useFormLinks } from '@/hooks/use-form-links'
import { CopyIcon } from './icons'
import { ButtonForm } from './button-form'
import { ErrorForm } from './error-form'
import { editLink } from '@/actions/edit-link'
import { DeleteButton } from './delete-button'

interface Props {
  link: TypeLink
}

export const FormEditLink: FC<Props> = ({ link }) => {
  const [popup, setPopup] = useState(false)
  const { formAction, formRef, handleChangeName, handleClickCopy, name, state, reloadLinks } = useFormLinks(async (prevState: any, formData: FormData) => {
    return await editLink(prevState, formData, link.id)
  }, link.name)
  const supabase = useSupabaseClient()
  const router = useRouter()

  const handlePopup = () => {
    setPopup(!popup)
  }

  const handleDelete = async () => {
    const { error } = await supabase.from('links').delete().eq('id', link.id)
    if (error) {
      toast.error('Error al borrar el enlace', {
        className: 'text-inherit text-red-500 bg-red-950 border border-red-900'
      })
      return
    }
    reloadLinks()
    router.push('/dashboard')
  }

  return (
    <>
      <ConfirmPopup cancel={handlePopup} deleteLink={handleDelete} isActivated={popup} />
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
