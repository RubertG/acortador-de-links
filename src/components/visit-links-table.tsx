import { type TypeLink } from '@/types/database.types'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { type FC } from 'react'
import { VisitLinkRowTable } from './visit-link-row-table'

interface Props {
  link: TypeLink
}

const theads = ['URL abreviada', 'URL', 'Fecha de visita']

export const VisitLinksTable: FC<Props> = async ({ link }) => {
  const supabase = createClient()
  const { data: visitsLinks, error } = await supabase
    .from('visits_links')
    .select('*')
    .eq('uid_link', link.id)

  if (error != null || visitsLinks == null) {
    return redirect('/dashboard')
  }

  return (
    <section className="container mx-auto max-w-5xl px-3 xl:p-0">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-table shadow-Terziary/50 border border-Terziary">
        <div className="w-full overflow-x-auto">
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
                visitsLinks.length === 0
                  ? (
                    <tr className="text-md font-medium tracking-wide text-left text-gray-300 border-Terziary">
                      <td className="px-3 py-2 md:px-4 md:py-3 text-center text-sm " colSpan={4}>No tienes visitas :(</td>
                    </tr>
                    )
                  : (
                      visitsLinks?.map(visit => (
                      <VisitLinkRowTable visit={visit} link={link} key={visit.id} />
                      ))
                    )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
