'use client'

import { type Database } from '@/types/database.types'
import { createBrowserClient } from '@supabase/ssr'
import { useMemo } from 'react'

export function getSupabaseBrowserClient () {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export function useSupabaseClient () {
  return useMemo(getSupabaseBrowserClient, [])
}
