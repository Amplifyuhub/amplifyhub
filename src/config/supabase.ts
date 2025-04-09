import { createClient } from '@supabase/supabase-js'

// Tenta pegar as variáveis de ambiente de diferentes formas
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY

console.log('Ambiente:', import.meta.env.MODE)
console.log('Variáveis de ambiente disponíveis:', {
  'import.meta.env.VITE_SUPABASE_URL': import.meta.env.VITE_SUPABASE_URL,
  'process.env.VITE_SUPABASE_URL': process.env.VITE_SUPABASE_URL,
  'import.meta.env.VITE_SUPABASE_ANON_KEY exists': !!import.meta.env.VITE_SUPABASE_ANON_KEY,
  'process.env.VITE_SUPABASE_ANON_KEY exists': !!process.env.VITE_SUPABASE_ANON_KEY
})

if (!supabaseUrl || !supabaseKey) {
  console.error('Erro: Variáveis de ambiente não encontradas', {
    supabaseUrl: !!supabaseUrl,
    supabaseKey: !!supabaseKey
  })
  throw new Error('Supabase URL and Anon Key are required')
}

console.log('Using Supabase URL:', supabaseUrl)
console.log('Using Supabase Key:', supabaseKey?.substring(0, 20) + '...')

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Teste a conexão imediatamente
supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error('Erro ao testar conexão com Supabase:', error)
  } else {
    console.log('Conexão com Supabase estabelecida com sucesso')
  }
})

export default supabase 