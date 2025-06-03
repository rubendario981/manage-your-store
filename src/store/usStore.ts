import { create } from 'zustand';

interface UIState {
  isSidebarOpen: 'true' | 'false';
  toggleSidebar: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: 'true',
  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: state.isSidebarOpen === 'true' ? 'false' : 'true',
    })),
}));
