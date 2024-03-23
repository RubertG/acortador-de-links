import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient () {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get (name: string) {
          return cookieStore.get(name)?.value
        },
        set (name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // El método set fue llamado desde un Componente de Servidor.
            // Esto puede ser ignorado si tienes middleware que actualiza
            // las sesiones de usuario.
          }
        },
        remove (name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // El método `delete` fue llamado desde un Componente de Servidor.
            // Esto puede ser ignorado si tienes middleware que actualiza
            // las sesiones de usuario.
          }
        }
      }
    }
  )
}
