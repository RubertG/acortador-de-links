'use client'

import { GithubIcon } from '@/components/icons'
import { useSupabaseClient } from '@/utils/supabase/client'

export function AuthButton () {
  const supabase = useSupabaseClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    })
  }

  return (
    <button
      type='button'
      className="text-white bg-[#24292F] hover:bg-[#24292F]/70 rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center transition-colors w-full"
      onClick={handleSignIn}
    >
      <GithubIcon className='w-4 h-4 me-2' />
      Ingresar con Github
    </button>
  )
}
