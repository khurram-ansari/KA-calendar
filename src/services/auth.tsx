import { supabase } from '@/lib/supabaseClient';

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw error;
  }

  return data?.session;
};
