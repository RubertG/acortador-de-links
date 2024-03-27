'use client'

import { useSupabaseClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export const SingOutButton = () => {
  const router = useRouter()
  const supabase = useSupabaseClient()

  const handleSingOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <button
      type='button'
      className="text-white bg-[#24292F] rounded-lg text-sm px-4 py-2 text-center hover:bg-red-800 transition-colors font-medium"
      onClick={handleSingOut}
    >
      Salir
    </button>
  )
}
