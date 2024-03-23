'use client'

import { GithubIcon } from '@/components/icons'
import { createClient } from '@/utils/supabase/client'
import { type Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

export default function AuthButton () {
  const [session, setSession] = useState<Session | null>()

  useEffect(() => {
    const getSession = async () => {
      const supabase = createClient()
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
    }
    getSession()
  }, [])

  const signin = async () => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_DOMAIN}/auth/callback`
      }
    })
  }

  const signOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
  }

  return (
    <form>
      {
        session
          ? (
          <button
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            onClick={signin}
          >
            <GithubIcon className='w-4 h-4 me-2' />
            Ingresar con Github
          </button>
            )
          : (
          <button
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            onClick={signOut}
          >
            Cerrar sesión
          </button>
            )
      }
    </form>
  )
}
