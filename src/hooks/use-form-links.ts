'use client'

import { addLink } from '@/actions/add-link'
import { copy } from '@/utils/copy'
import { useEffect, useRef, useState } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'

const initialState = {
  message: ''
}

export const useFormLinks = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [firstRender, setFirstRender] = useState(true)
  const [name, setName] = useState('')
  const [state, formAction] = useFormState(addLink, initialState)

  useEffect(() => {
    if (state.message === '' && formRef.current) {
      formRef.current.reset()
      if (!firstRender) {
        toast.success('Enlace creado correctamente', {
          className: 'bg-Terziary border-purple-950 flex items-center text-base text-gray-200',
          style: {
            fontFamily: 'inherit'
          }
        })
      }
    }
    setFirstRender(false)
  }, [state.message])

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleClickCopy = async () => {
    toast.success('Enlace copiado', {
      className: 'bg-Terziary border-purple-950 flex items-center text-base text-gray-200',
      style: {
        fontFamily: 'inherit'
      }
    })
    await copy(`${process.env.NEXT_PUBLIC_SITE_URL}${name}`)
  }

  return {
    formAction,
    formRef,
    state,
    handleChangeName,
    name,
    handleClickCopy
  }
}