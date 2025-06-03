import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthStore {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      login: async (token) => {
        try {
          set({ token, isAuthenticated: true });
          return true;
        } catch (error) {
          console.log('Error al iniciar sesión', error);
          return false;
        }
      },
      logout: () =>
        set({ token: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);