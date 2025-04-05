import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zpdolrtzpfzfbrfknojx.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwZG9scnR6cGZ6ZmJyZmtub2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NjQ1NzAsImV4cCI6MjAyNTI0MDU3MH0.vxJ0JQVECiKOPyQXvUwVZxMIRYGz3kBBvZLBLFBXP4Y'

export const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase 