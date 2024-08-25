import { supabase } from '@/lib/supabaseClient';
import { Provider, Session, User } from '@supabase/supabase-js';
import { createContext, useState, useEffect, useContext } from 'react';
type TAuthContextType = {
  session: Session | null;
  user: User | null;
  loginWithThirdParty: (provider: Provider) => Promise<boolean>;
  logout: () => Promise<boolean>;
};

const AuthContext = createContext<TAuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const loginWithThirdParty = async (provider: Provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: 'http://localhost:5173/calendar',
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    if (error) {
      throw error;
    }

    // setSession(user);

    return true;
  };
  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    setSession(null);

    return true;
  };

  return (
    <AuthContext.Provider
      value={{ session, user, loginWithThirdParty, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
