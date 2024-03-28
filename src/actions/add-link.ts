'use server'

import { createClient } from '@/utils/supabase/server'

export const addLink = async (prevState: any, formData: FormData) => {
  const name = formData.get('name')?.toString().replace(' ', '-')
  const url = formData.get('url')?.toString()

  if (!url || !name) {
    return {
      message: 'Rellena los campos'
    }
  }

  if (!url.startsWith('http')) {
    return {
      message: 'URL invalida'
    }
  }

  if (url === 'dashboard') {
    return {
      message: 'URL invalida'
    }
  }

  const supabase = createClient()
  const { data, error: errorSelect } = await supabase.from('links').select('*').eq('name', name)

  if (errorSelect) {
    return {
      message: 'Error al guardar el enlace'
    }
  }

  if (data.length !== 0) {
    return {
      message: 'El nombre ya existe'
    }
  }

  const { data: { user } } = await supabase.auth.getUser()
  const shortUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${name}`
  const { error } = await supabase.from('links').insert({ name, url, short_url: shortUrl, uid_user: user?.id })

  if (error) {
    return {
      message: 'Error al guardar el enlace'
    }
  }

  return {
    message: ''
  }
}
