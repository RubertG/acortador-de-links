'use client'

import { useDebounce } from '@react-hooks-hub/use-debounce'
import { useState, type FC } from 'react'
import { LoadingIcon } from './icons'
import { type TypeStateLinks } from '@/types/types'

interface Props {
  setStateLinks: (links: TypeStateLinks) => void
  stateLinks: TypeStateLinks
}

export const SearcherLinks: FC<Props> = ({ setStateLinks, stateLinks }) => {
  const [loading, setLoading] = useState(false)
  const debouceSearch = useDebounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    const newStateLinks: TypeStateLinks = {
      ...stateLinks,
      filterLinks: stateLinks.links.filter(
        link => link.url.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    }
    setStateLinks(newStateLinks)
    setLoading(false)
  }, 300)

  return (
    <search
      className='w-full px-3 py-2 md:px-4 md:py-3 border-b border-Terziary flex items-center justify-between gap-2'
    >
      <input
        type='text'
        placeholder='Buscar links por la URL...'
        className='rounded-md text-sm md:text-base py-1 px-3 bg-secondary w-full md:w-[50%] max-w-lg focus:outline-none focus:outline-1 focus:outline-Terziary placeholder:text-gray-400 text-gray-300'
        onChange={e => {
          setLoading(true)
          debouceSearch(e)
        }}
      />
      <LoadingIcon className='w-10' loading={loading} />
    </search>
  )
}
