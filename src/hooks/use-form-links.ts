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

export const useFormLinks = () => {
  const { reloadLinks } = useUserLinksContext()
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState('')
  const [state, formAction] = useFormState(addLink, initialState)

  useEffect(() => {
    if (state.message === '' && formRef.current && state.send) {
      formRef.current.reset()
      toast.success('Enlace creado correctamente', {
        style: {
          background: '#220836',
          borderColor: '#0d0515',
          fontFamily: 'inherit'
        }
      })
      state.send = false
      setName('')
      reloadLinks()
    }
  }, [state.message, state.send])

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
    handleClickCopy
  }
}
