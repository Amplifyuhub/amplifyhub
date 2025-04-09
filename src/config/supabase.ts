import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Anon Key are required')
}

console.log('Ambiente:', import.meta.env.MODE)
console.log('Using Supabase URL:', supabaseUrl)
console.log('Using Supabase Key:', supabaseKey?.substring(0, 20) + '...')

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

export default supabase 