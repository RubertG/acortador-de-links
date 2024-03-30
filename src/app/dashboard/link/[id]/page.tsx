import { FormEditLink } from '@/components/form-edit-link'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
  params: {
    id: string
  }
}

const LinkPage = async ({ params: { id } }: Props) => {
  const supabase = createClient()
  const { data: links } = await supabase.from('links').select('*').eq('id', id)

  if (!links || links.length === 0) {
    toast.error('Error al encontrar el enlace', {
      className: 'text-inherit text-red-500 bg-red-950 border border-red-900'
    })
    return redirect('/dashboard')
  }

  const link = links[0]

  return (
    <main
      className='my-3 md:my-10 px-2 xl:px-0'
    >
      < h1
        className='gradient-text px-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-center m-auto mb-5 md:mb-8'
      > Editar enlace personalizado</h1 >
      <FormEditLink link={link} />
    </ main>
  )
}

export default LinkPage
