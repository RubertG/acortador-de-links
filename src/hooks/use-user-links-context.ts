'use client'

import { contextUserLinks } from '@/context/user-links-context'
import { useContext } from 'react'

export const useUserLinksContext = () => {
  const data = useContext(contextUserLinks)
  if (!data) {
    throw new Error('useUserLinksContext debe ejecutarce dentro del provider')
  }
  return data
}
