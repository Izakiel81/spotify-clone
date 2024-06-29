import { create } from "zustand";

interface AuthModalStore {
  isOpen: boolean;
  view: string;
  setView: (view: string) => void;
  onOpen: () => void;
  onClose: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  view: "sign-in",
  setView: (view) => set({ view }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
