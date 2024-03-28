import { createClient } from '@/utils/supabase/server'
import { PublicLinksTable } from './public-links-table'

export const PublicLinksContainer = async () => {
  const supabase = createClient()
  const { data: links } = await supabase.from('links').select('*, user:users(*)')

  return (
    <section>
      <h2
        className='gradient-text px-3 text-2xl lg:text-3xl font-bold text-center m-auto mb-5 xl:mb-6'
      >Enlaces públicos</h2>
      <PublicLinksTable links={links} />
    </section >
  )
}
