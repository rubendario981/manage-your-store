import { create } from 'zustand';

interface AuthStore {
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  isAuthenticated: false,
  login: async (email, password) => {
    try {
      console.log('email and password', email, password);
      // Simulate login setting token
      set({ token: '1234', isAuthenticated: true });
      return true;
    } catch (error) {
      console.error(error);
      set({ token: null, isAuthenticated: false });
      return false;
    }
  },
  logout: () => {
    set({ token: null, isAuthenticated: false });
  },
}));