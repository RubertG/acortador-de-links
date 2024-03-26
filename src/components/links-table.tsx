// 'use client'

import { type TypeLink } from '@/types/database.types'
import { LinkRowTable } from './link-row-table'

interface Props {
  links: TypeLink[] | null
}

export const LinkTable = ({ links }: Props) => {
  return (
    <section className="container mx-auto max-w-5xl px-3 xl:p-0">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-table shadow-Terziary/50 border border-Terziary">
        <div className="w-full overflow-x-auto">
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
                links?.map(link => (
                  <LinkRowTable link={link} key={link.id} />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
