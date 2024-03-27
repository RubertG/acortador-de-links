'use client'

import { GithubIcon } from '@/components/icons'
import { createClient } from '@/utils/supabase/client'

export function AuthButton () {
  const supabase = createClient()

  const handleSignIn = async () => {
    console.log(`${process.env.NEXT_PUBLIC_DOMAIN}/auth/callback`)
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_DOMAIN}/auth/callback`
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
