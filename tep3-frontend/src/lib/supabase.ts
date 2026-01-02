import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  country?: string;
  language?: string;
  bio?: string;
  unique_id?: string;
  membership_tier?: string;
  setup_complete?: boolean;
  created_at?: string;
}

export default supabase;
