import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { type ReactNode } from 'react'

export const ProtectedRoute = async ({ children }: { children: ReactNode }) => {
  const supabase = createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user || error) return redirect('/login')

  return (
    <>
      {children}
    </>
  )
}
