'use client'

import { useState } from 'react'
import { useFormLinks } from './use-form-links'
import { editLink } from '@/actions/edit-link'
import { type TypeLink } from '@/types/database.types'
import { useSupabaseClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const useFormEditLinks = ({ link }: { link: TypeLink }) => {
  const [popup, setPopup] = useState(false)
  const [loading, setLoading] = useState(false)
  const { formAction, formRef, handleChangeName, handleClickCopy, name, state, reloadLinks } = useFormLinks(async (prevState: any, formData: FormData) => {
    return await editLink(prevState, formData, link.id)
  }, link.name, false)
  const supabase = useSupabaseClient()
  const router = useRouter()

  const handlePopup = () => {
    setPopup(!popup)
  }

  const handleDelete = async () => {
    setLoading(true)
    const { error } = await supabase.from('links').delete().eq('id', link.id)
    if (error) {
      toast.error('Error al borrar el enlace', {
        className: 'text-inherit text-red-500 bg-red-950 border border-red-900'
      })
      return
    }
    reloadLinks()
    setLoading(false)
    router.push('/dashboard')
  }

  return {
    formAction,
    formRef,
    handleChangeName,
    handleClickCopy,
    name,
    state,
    handlePopup,
    handleDelete,
    popup,
    loading
  }
}
