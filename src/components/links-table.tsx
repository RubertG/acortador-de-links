'use client'

import { type TypeLink } from '@/types/database.types'
import { LinkRowTable } from './link-row-table'
import { SearcherLinks } from './searcher-links'
import { useState } from 'react'
import { type TypeStateLinks } from '@/types/types'

interface Props {
  links: TypeLink[] | null
}

export const LinkTable = ({ links: initialLinks }: Props) => {
  const [stateLinks, setStateLinks] = useState<TypeStateLinks>(
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
                <th className="px-3 py-2 md:px-4 md:py-3 border-r text-center border-Terziary">Usuario</th>
                <th className="px-3 py-2 md:px-4 md:py-3 border-r text-center border-Terziary">URL abreviada</th>
                <th className="px-3 py-2 md:px-4 md:py-3 border-r text-center border-Terziary">URL</th>
                <th className="px-3 py-2 md:px-4 md:py-3 text-center">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {
                stateLinks.filterLinks?.length === 0
                  ? (
                    <tr className="text-md font-medium tracking-wide text-left text-gray-300 border-Terziary">
                      <td className="px-3 py-2 md:px-4 md:py-3 text-center text-sm " colSpan={4}>No hay links :(</td>
                    </tr>
                    )
                  : (
                      stateLinks.filterLinks?.map(link => (
                      <LinkRowTable link={link} key={link.id} />
                      ))
                    )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
