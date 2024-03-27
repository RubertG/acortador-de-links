'use client'

import { useSupabaseClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LoadingIcon } from './icons'

export const SingOutButton = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = useSupabaseClient()

  const handleSingOut = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <button
      type='button'
      className="text-white bg-[#24292F] rounded-lg text-sm px-4 py-2 text-center hover:bg-red-800 transition-colors font-medium relative"
      onClick={handleSingOut}
    >

      <p
        className={`transition-opacity ${!loading ? 'opacity-100' : 'opacity-0'}`}>
        Salir
      </p>
      <LoadingIcon
        className='w-10 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'
        loading={loading}
        color='#FFFF'
      />

    </button>
  )
}
