import { ClickGraphContainer } from '@/components/click-graph-container'
import { FormEditLink } from '@/components/form-edit-link'
import { VisitLinksTable } from '@/components/visit-links-table'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

const LinkPage = async ({ params: { id } }: Props) => {
  const supabase = createClient()
  const { data: links } = await supabase.from('links').select('*').eq('id', id)

  if (!links || links.length === 0) {
    return redirect('/dashboard')
  }

  const link = links[0]

  return (
    <main
      className='my-4 md:my-6 px-2 xl:px-0'
    >
      < h1
        className='gradient-text px-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-center m-auto mb-5 md:mb-8'
      > Editar enlace personalizado</h1 >
      <FormEditLink link={link} />
      <section>
        <ClickGraphContainer idLink={link.id} />
        <VisitLinksTable link={link} />
      </section>
    </ main>
  )
}

export default LinkPage
