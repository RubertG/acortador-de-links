'use client'

import { useDebounce } from '@react-hooks-hub/use-debounce'
import { useState, type FC, type ChangeEvent, useEffect, useRef } from 'react'
import { LoadingIcon } from './icons'
import { useUserLinksContext } from '@/hooks/use-user-links-context'

interface Props {
  callback: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearcherLinks: FC<Props> = ({ callback }) => {
  const [loading, setLoading] = useState(false)
  const debouceSearch = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    callback(e)
    setLoading(false)
  }, 300)

  return (
    <search
      className='w-full px-3 py-2 md:px-4 md:py-3 flex items-center gap-3'
    >
      <input
        type='text'
        placeholder='Buscar links por la URL...'
        className='rounded-md text-sm md:text-base py-2 px-3 bg-secondary w-full md:w-[50%] max-w-lg focus:outline-none focus:outline-1 focus:outline-Terziary placeholder:text-gray-400 text-gray-300'
        onChange={e => {
          setLoading(true)
          debouceSearch(e)
        }}
      />
      <LoadingIcon className='w-10' loading={loading} />
    </search>
  )
}

export const SearcherLinksAdmin: FC<Props> = ({ callback }) => {
  const [loading, setLoading] = useState(false)
  const { links } = useUserLinksContext()
  const inputRef = useRef<HTMLInputElement>(null)
  const debouceSearch = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    callback(e)
    setLoading(false)
  }, 300)

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = ''
  }, [links])

  return (
    <search
      className='w-full px-3 py-2 md:px-4 md:py-3 flex items-center gap-3'
    >
      <input
        type='text'
        ref={inputRef}
        placeholder='Buscar links por la URL...'
        className='rounded-md text-sm md:text-base py-2 px-3 bg-secondary w-full md:w-[50%] max-w-lg focus:outline-none focus:outline-1 focus:outline-Terziary placeholder:text-gray-400 text-gray-300'
        onChange={e => {
          setLoading(true)
          debouceSearch(e)
        }}
      />
      <LoadingIcon className='w-10' loading={loading} />
    </search>
  )
}
