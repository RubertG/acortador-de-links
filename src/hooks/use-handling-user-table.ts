'use client'

import { type TypeLinkWithCheck, type TypeLink } from '@/types/database.types'
import { useState, type MouseEvent, useEffect, useRef } from 'react'
import { type TypeStateUserLinks } from '@/types/types'
import { NAME_CHECKBOX } from '@/types/const'
import { useSupabaseClient } from '@/utils/supabase/client'
import { toast } from 'sonner'
import { useUserLinksContext } from '@/hooks/use-user-links-context'

export const useHandlingUserTable = () => {
  const { links, loading } = useUserLinksContext()
  const [stateLinks, setStateLinks] = useState<TypeStateUserLinks>({
    filterLinks: [],
    links: []
  })
  const [isSelectedLinks, setIsSelectedLinks] = useState(false)
  const [isSelectedParent, setIsSelectedParent] = useState(false)
  const [popup, setPopup] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)
  const searchRef = useRef<HTMLHeadElement>(null)
  const supabase = useSupabaseClient()

  useEffect(() => {
    setStateLinks({
      links,
      filterLinks: links
    })
    setIsSelectedLinks(false)
    setIsSelectedParent(false)
    setPopup(false)
  }, [links])

  const handleClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.name === NAME_CHECKBOX.parent) {
      const isChecked = !isSelectedParent
      const newStateLinks: TypeStateUserLinks = {
        links: [],
        filterLinks: []
      }
      for (const link of stateLinks.links) {
        const isCheck = stateLinks.filterLinks.some(l => l.id === link.id) ? isChecked : link.isCheck
        const newLink: TypeLinkWithCheck = {
          ...link,
          isCheck
        }
        newStateLinks.links.push(newLink)
        if (stateLinks.filterLinks.some(l => l.id === newLink.id)) {
          newStateLinks.filterLinks.push(newLink)
        }
      }
      setStateLinks(newStateLinks)
      setIsSelectedLinks(isChecked)
      setIsSelectedParent(isChecked)
    } else {
      let countChecked = 0
      const newStateLinks: TypeStateUserLinks = {
        links: [],
        filterLinks: []
      }
      for (const link of stateLinks.links) {
        const newLink: TypeLinkWithCheck = {
          ...link,
          isCheck: link.id === e.currentTarget.id ? !link.isCheck : link.isCheck
        }
        if (newLink.isCheck) countChecked++
        newStateLinks.links.push(newLink)
        if (stateLinks.filterLinks.some(l => l.id === newLink.id)) {
          newStateLinks.filterLinks.push(newLink)
        }
      }
      setStateLinks(newStateLinks)
      setIsSelectedParent(countChecked === newStateLinks.filterLinks.length)
      setIsSelectedLinks(countChecked !== 0)
    }
  }

  const callbackSearcher = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilterLinks: TypeLinkWithCheck[] = []
    const search = e.target.value

    for (const link of stateLinks.links) {
      if (link.url.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        newFilterLinks.push(link)
      }
    }

    setStateLinks({
      ...stateLinks,
      filterLinks: newFilterLinks
    })
  }

  const handlePopup = () => {
    setPopup(!popup)
  }

  const deleteLinks = async () => {
    setLoadingDelete(true)
    const newStateLinks: TypeStateUserLinks = {
      filterLinks: [],
      links: []
    }
    const linksToDelete: Array<TypeLink['id']> = []

    for (const link of stateLinks.links) {
      if (link.isCheck) linksToDelete.push(link.id)
      else {
        newStateLinks.links.push(link)
        if (stateLinks.filterLinks.some((l) => l.id === link.id)) {
          newStateLinks.filterLinks.push(link)
        }
      }
    }

    try {
      await Promise.all(
        linksToDelete.map(async (id) => {
          const { error } = await supabase.from('links').delete().match({ id })
          if (error) throw new Error()
        })
      )
    } catch (error) {
      toast.error('Error al borrar los links', {
        className: 'text-inherit text-red-500 bg-red-950 border border-red-900'
      })
      setLoadingDelete(false)
      setPopup(false)
      return
    }

    setLoadingDelete(false)
    setIsSelectedParent(false)
    setStateLinks(newStateLinks)
    setPopup(false)
    setIsSelectedLinks(false)
  }

  return {
    loading,
    isSelectedLinks,
    searchRef,
    handleClick,
    callbackSearcher,
    handlePopup,
    deleteLinks,
    popup,
    isSelectedParent,
    stateLinks,
    loadingDelete
  }
}
