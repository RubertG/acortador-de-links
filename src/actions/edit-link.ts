'use server'

import { createClient } from '@/utils/supabase/server'

export const editLink = async (prevState: any, formData: FormData, id: string) => {
  const name = formData.get('name')?.toString().replace(' ', '-')

  if (!name) {
    return {
      message: 'Rellena los campos',
      send: false
    }
  }

  const supabase = createClient()
  const { data, error: errorSelect } = await supabase.from('links').select('*').eq('name', name)

  if (errorSelect) {
    return {
      message: 'Error al guardar el enlace',
      send: false
    }
  }

  if (data.length !== 0) {
    return {
      message: 'El nombre ya existe',
      send: false
    }
  }

  const shortUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${name}`
  const { error } = await supabase
    .from('links')
    .update({ name, short_url: shortUrl })
    .eq('id', id)

  if (error) {
    return {
      message: 'Error al guardar el enlace',
      send: false
    }
  }

  return {
    message: '',
    send: true
  }
}
