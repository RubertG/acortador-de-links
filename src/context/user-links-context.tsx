'use client'

import { type TypeLinkWithCheck, type TypeLink } from '@/types/database.types'
import { type TypeContextUserLinks } from '@/types/types'
import { useSupabaseClient } from '@/utils/supabase/client'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'sonner'

export const contextUserLinks = createContext<TypeContextUserLinks | null>(null)

export const ProviderContextUserLinks = ({ children }: {
  children: React.ReactNode
}) => {
  const [links, setLinks] = useState<TypeLinkWithCheck[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = useSupabaseClient()

  useEffect(() => {
    fetchLinks()
  }, [])

  const fetchLinks = async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return toast.error('No se pudo obtener el usuario', {
        className: 'text-inherit text-red-500 bg-red-950 border border-red-900'
      })
    }
    const { data: links } = await supabase
      .from('links')
      .select('*')
      .eq('uid_user', user?.id)
      .order('created_at', { ascending: false })

    if (!links) {
      return toast.error('No se pudieron obtener los enlaces', {
        className: 'text-inherit text-red-500 bg-red-950 border border-red-900'
      })
    }

    const newLinks: TypeLinkWithCheck[] = links.map((link: TypeLink) => ({
      ...link,
      isCheck: false
    }))

    setLinks(newLinks)
    setLoading(false)
  }

  return (
    <contextUserLinks.Provider value={{
      links,
      reloadLinks: fetchLinks,
      loading
    }}>
      {children}
    </contextUserLinks.Provider>
  )
}
