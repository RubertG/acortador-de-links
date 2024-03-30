'use client'

import { addLink } from '@/actions/add-link'
import { copy } from '@/utils/copy'
import { useEffect, useRef, useState } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import { useUserLinksContext } from './use-user-links-context'

const initialState = {
  message: '',
  send: false
}

export type TypeAction = (prevState: any, formData: FormData) => Promise<{
  message: string
  send: boolean
}>

export const useFormLinks = (
  action: TypeAction = addLink,
  initialName = '',
  resetForm = true
) => {
  const { reloadLinks } = useUserLinksContext()
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState(initialName)
  const [state, formAction] = useFormState(action, initialState)

  useEffect(() => {
    if (state?.message === '' && formRef.current && state?.send) {
      toast.success(`Enlace ${resetForm ? 'creado' : 'actualizado'} correctamente`, {
        style: {
          background: '#220836',
          borderColor: '#0d0515',
          fontFamily: 'inherit'
        }
      })
      if (resetForm) {
        formRef.current.reset()
        setName('')
      }
      state.send = false
      reloadLinks()
    }
  }, [state?.message, state?.send])

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.replace(' ', '-'))
  }

  const handleClickCopy = async () => {
    toast.success('Enlace copiado', {
      style: {
        background: '#220836',
        borderColor: '#0d0515',
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
    handleClickCopy,
    reloadLinks
  }
}
