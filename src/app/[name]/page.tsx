import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { type FC } from 'react'

interface Props {
  params: {
    name: string
  }
}

const RedirectingPage: FC<Props> = async ({ params: { name } }) => {
  const supabase = createClient()
  const { data: links, error } = await supabase.from('links').select('*').eq('name', name)

  if (error != null || links == null || links?.length === 0) {
    return redirect('/')
  }

  await supabase.from('visits_links').insert({ uid_link: links[0].id })
  return redirect(links[0].url)
}

export default RedirectingPage
