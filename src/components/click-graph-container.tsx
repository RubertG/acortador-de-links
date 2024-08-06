import { createClient } from '@/utils/supabase/server'
import { type FC } from 'react'
import { ClickGraph } from './click-graph'
import { redirect } from 'next/navigation'

interface Props {
  idLink: string
}

export const ClickGraphContainer: FC<Props> = async ({ idLink }) => {
  const supabase = createClient()
  const { data: visitsLinks, error } = await supabase
    .from('visits_links')
    .select('*')
    .eq('uid_link', idLink)
    .order('created_at', { ascending: false })

  if (error != null || !visitsLinks) {
    return redirect('/dashboard')
  }

  return (
    <>
      <h2
        className='gradient-text px-3 text-xl sm:text-3xl font-bold text-center m-auto mb-5 md:mb-8 mt-10'
      >
        Clicks últimos 15 días
      </h2>
      <section
        className='mb-8 container mx-auto max-w-5xl px-3 xl:p-0'
      >
        <ClickGraph visitsLinks={visitsLinks} />
      </section>
    </>
  )
}
