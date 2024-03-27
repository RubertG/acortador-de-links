import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from './utils/supabase/server'

export async function middleware (request: NextRequest) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (request.url.includes('/dashboard') && user == null) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
