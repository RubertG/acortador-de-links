import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { SingOutButton } from './sing-out-button'

export const Nav = async () => {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <nav
      className="backdrop-blur-lg py-3 px-3 xl:px-0"
    >
      <nav
        className='max-w-5xl m-auto flex items-center justify-between'
      >
        <Link
          href='/'
          className='text-xl font-bold text-gray-200 tracking-normal hover:text-purple-500 transition-colors'
        >
          URL shortener
        </Link>
        {
          user
            ? (
              <ul
                className='flex items-center justify-center gap-3'
              >
                <li>
                  <Link
                    href='/dashboard'
                    className='bg-purple-800 px-4 py-2 rounded-lg text-sm hover:bg-purple-950 transition-colors font-medium'
                  >
                    Panel
                  </Link>
                </li>
                <li><SingOutButton /></li>
              </ul>
              )
            : (
              <Link
                className='bg-purple-800 px-4 py-2 rounded-lg text-sm hover:bg-purple-950 transition-colors font-medium'
                href='/login'
              >
                Ingresar
              </Link>
              )
        }
      </nav>
    </nav>
  )
}
