'use client'

import { ButtonForm } from './button-form'
import { ErrorForm } from './error-form'
import { CopyIcon } from './icons'
import { useFormLinks } from '@/hooks/use-form-links'

export const FormCreateLink = () => {
  const { formAction, formRef, handleChangeName, handleClickCopy, name, state } = useFormLinks()

  return (
    <form
      action={formAction}
      ref={formRef}
      className='border border-Terziary rounded-lg shadow-table shadow-Terziary/50 p-3 md:p-5 max-w-lg m-auto'
    >
      <label
        className=''
      >
        <input
          type='text'
          name='name'
          placeholder='Nombre del enlace'
          onChange={handleChangeName}
          className='rounded-md text-sm md:text-base py-2 px-3 bg-secondary w-full focus:outline-none focus:outline-1 focus:outline-Terziary placeholder:text-gray-400 text-gray-300'
        />
        <div
          className='flex items-center justify-between w-full py-3 md:py-4 px-3'
        >
          <p
            className='text-ellipsis whitespace-nowrap overflow-hidden text-sm md:text-base text-gray-400'
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
      <input
        type='text'
        name='url'
        placeholder='URL'
        className='rounded-md text-sm md:text-base py-2 px-3 bg-secondary w-full focus:outline-none focus:outline-1 focus:outline-Terziary placeholder:text-gray-400 text-gray-300 mb-2'
      />
      {
        state.message !== '' && <ErrorForm message={state.message} />
      }
      <ButtonForm />
    </form>
  )
}
