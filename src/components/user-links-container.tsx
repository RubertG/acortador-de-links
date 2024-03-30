import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { UserLinksTable } from './user-links-table'

export const UserLinksContainer = async () => {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return redirect('/login')

  return (
    <section>
      <h2
        className='gradient-text px-3 text-2xl lg:text-3xl font-bold text-center m-auto mb-5 md:mb-8 mt-10'
      >Mis enlaces</h2>
      <UserLinksTable />
    </section>
  )
}
