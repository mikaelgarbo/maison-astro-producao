import { createClient } from '@supabase/supabase-js';

// Usamos import.meta.env APENAS para a máquina local.
// Usamos process.env para forçar a leitura direta das variáveis no servidor do Cloudflare.
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

// Essa verificação evita que o servidor "exploda" se não encontrar as chaves instantaneamente.
if (!supabaseUrl || !supabaseKey) {
  console.warn("ATENÇÃO: Variáveis do Supabase não encontradas durante o Build!");
}

export const supabase = createClient(
  supabaseUrl || "https://dummy-url.supabase.co", 
  supabaseKey || "dummy-key"
);