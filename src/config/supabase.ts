import { createClient } from '@supabase/supabase-js'

// Tenta usar as variáveis de ambiente primeiro, se não existirem usa os valores padrão
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zpdolrtzpfzfbrfknojx.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwZG9scnR6cGZ6ZmJyZmtub2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MTc3ODIsImV4cCI6MjA1OTM5Mzc4Mn0.DSzrLNt5pcKJMxEW80oVmZog9YOOsKgYxSgzXP_HLWY'

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