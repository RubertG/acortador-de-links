'use client'

import { type TypeLink } from '@/types/database.types'
import { SearcherLinks } from './searcher-links'
import { useState } from 'react'
import { type TypeStateUserLinks } from '@/types/types'
import { UserRowTable } from './user-row-table'

interface Props {
  links: TypeLink[] | null
}

const theads = ['URL', 'URL abreviada', 'Fecha', 'Estadísticas']

export const UserLinksTable = ({ links: initialLinks }: Props) => {
  const [stateLinks, setStateLinks] = useState<TypeStateUserLinks>(
    initialLinks
      ? {
          links: initialLinks,
          filterLinks: initialLinks
        }
      : {
          filterLinks: [],
          links: []
        })

  return (
    <section className="container mx-auto max-w-5xl px-3 xl:p-0">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-table shadow-Terziary/50 border border-Terziary">
        <div className="w-full overflow-x-auto">
          <SearcherLinks setStateLinks={setStateLinks} stateLinks={stateLinks} />
          <table className="w-full">
            <thead>
              <tr className="text-md font-medium tracking-wide text-left text-gray-200 bg-secondary border-b border-Terziary">
                {
                  theads.map(text => (
                    <th className="px-3 py-2 md:px-4 md:py-3 border-r text-center border-Terziary last:border-r-0" key={text}>{text}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                stateLinks.filterLinks?.length === 0
                  ? (
                    <tr className="text-md font-medium tracking-wide text-left text-gray-300 border-Terziary">
                      <td className="px-3 py-2 md:px-4 md:py-3 text-center text-sm " colSpan={4}>No has creado links aún :(</td>
                    </tr>
                    )
                  : (
                      stateLinks.filterLinks?.map(link => (
                      <UserRowTable link={link} key={link.id} />
                      ))
                    )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
