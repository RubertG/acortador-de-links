'use client'

import { type TypeLinkWithUser } from '@/types/database.types'
import { PublicRowTable } from './public-row-table'
import { SearcherLinks } from './searcher-links'
import { useState } from 'react'
import { type TypeStatePublicLinks } from '@/types/types'

interface Props {
  links: TypeLinkWithUser[] | null
}

const theads = ['Usuario', 'URL abreviada', 'URL', 'Fecha']

export const PublicLinksTable = ({ links: initialLinks }: Props) => {
  const [stateLinks, setStateLinks] = useState<TypeStatePublicLinks>(
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
                      <td className="px-3 py-2 md:px-4 md:py-3 text-center text-sm " colSpan={4}>No hay links :(</td>
                    </tr>
                    )
                  : (
                      stateLinks.filterLinks?.map(link => (
                      <PublicRowTable link={link} key={link.id} />
                      ))
                    )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
