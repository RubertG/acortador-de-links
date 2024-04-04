'use client'

import { ITEMS_FOR_PAGE_IN_TABLE } from '@/types/const'
import { type TypeItemsPagination } from '@/types/types'
import { Pagination } from 'keep-react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useEffect, useState, type FC, type MouseEvent } from 'react'

interface Props {
  items: TypeItemsPagination
  setItems: (items: any) => void
}

export const PaginationTable: FC<Props> = ({ items, setItems }) => {
  const [selected, setSelected] = useState(1)
  const totalPages = Math.ceil(items.length / ITEMS_FOR_PAGE_IN_TABLE)

  useEffect(() => {
    const newItems = items.slice(ITEMS_FOR_PAGE_IN_TABLE * (selected - 1), ITEMS_FOR_PAGE_IN_TABLE * selected)
    setItems(newItems)
  }, [selected])

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setSelected(Number(e.currentTarget.id))
  }

  if (totalPages === 1) {
    return <></>
  }

  return (
    <Pagination
      className='border-t border-Terziary px-3 py-3 md:px-4 overflow-x-auto'
      shape="circle"
    >
      <Pagination.Navigator
        className='py-1 pr-2.5 pl-1 text-sm font-normal mr-2 border-gray-300 text-gray-300 disabled:border-gray-600 disabled:text-gray-500 disabled:cursor-not-allowed transition'
        onClick={() => { setSelected(selected - 1) }}
        disabled={selected === 1}
      >
        <CaretLeft size={18} />
        Anterior
      </Pagination.Navigator>

      <Pagination.List>
        {
          new Array(totalPages).fill(0).map((_, index) => {
            return (
              <Pagination.Item
                id={`${index + 1}`}
                className={`p-2 py-0.5 rounded-md text-sm text-gray-300 transition-colors ${selected === index + 1 ? 'bg-purple-900 text-white' : ''}`}
                onClick={handleClick}
                key={index}
              >{index + 1}</Pagination.Item>
            )
          })
        }
      </Pagination.List>

      <Pagination.Navigator
        className='py-1 pl-2.5 pr-1 text-sm font-normal ml-2 border-gray-300 text-gray-300 disabled:border-gray-600 disabled:text-gray-500 disabled:cursor-not-allowed transition'
        disabled={selected === totalPages}
        onClick={() => { setSelected(selected + 1) }}
      >
        Siguiente
        <CaretRight size={18} />
      </Pagination.Navigator>
    </Pagination>
  )
}
