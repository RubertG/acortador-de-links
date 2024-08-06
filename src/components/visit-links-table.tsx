'use client'

import { type TypeVisitLink, type TypeLink } from '@/types/database.types'
import { useEffect, useState, type FC } from 'react'
import { VisitLinkRowTable } from './visit-link-row-table'
import { PaginationTable } from './pagination-table'
import { useSupabaseClient } from '@/utils/supabase/client'
import { type TypeStateVisitsLinks } from '@/types/types'
import { toast } from 'sonner'
import { ITEMS_FOR_PAGE_IN_TABLE } from '@/types/const'
import { LoadingIcon } from './icons'

interface Props {
  link: TypeLink
}

const theads = ['URL abreviada', 'URL', 'Fecha de visita']

export const VisitLinksTable: FC<Props> = ({ link }) => {
  const supabase = useSupabaseClient()
  const [state, setState] = useState<TypeStateVisitsLinks>({
    visitLink: [],
    filterVisitLink: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const { data: visitsLinks, error } = await supabase
        .from('visits_links')
        .select('*')
        .eq('uid_link', link.id)
        .order('created_at', { ascending: false })

      if (error != null || visitsLinks == null) {
        toast.error('Error al optener la lista de clicks', {
          className: 'text-inherit text-red-500 bg-red-950 border border-red-900'
        })
        setLoading(false)
        return
      }

      setState({
        visitLink: visitsLinks,
        filterVisitLink: visitsLinks.slice(0, ITEMS_FOR_PAGE_IN_TABLE)
      })
      setLoading(false)
    }

    getData()
  }, [])

  const setItems = (items: TypeVisitLink[]) => {
    setState({
      ...state,
      filterVisitLink: items
    })
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
                (state.filterVisitLink.length === 0 && !loading)
                  ? (
                    <tr className="text-md font-medium tracking-wide text-left text-gray-300 border-Terziary">
                      <td className="px-3 py-2 md:px-4 md:py-3 text-center text-sm " colSpan={4}>No tienes visitas :(</td>
                    </tr>
                    )
                  : (
                      state.filterVisitLink?.map(visit => (
                      <VisitLinkRowTable visit={visit} link={link} key={visit.id} />
                      ))
                    )
              }
              {
                (loading && state.filterVisitLink.length === 0) && (
                  <tr className="text-md font-medium tracking-wide text-left text-gray-300 border-Terziary">
                    <td
                      className="px-3 py-6"
                      colSpan={3}>
                      <LoadingIcon className='w-20 m-auto' loading={true} />
                    </td>
                  </tr>
                )
              }

            </tbody>
          </table>
        </div>
        <footer
          className='overflow-hidden'
        >
          {
            state.visitLink && <PaginationTable items={state.visitLink} setItems={setItems} />
          }
        </footer>
      </div>
    </section>
  )
}
