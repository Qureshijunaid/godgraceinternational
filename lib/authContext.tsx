"use client";

import { createContext, useContext } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';

type AuthContextType = {
  user: any;
  supabase: SupabaseClient;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = AuthContext.Provider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};