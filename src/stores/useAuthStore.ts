import { create } from "zustand";

type User = {
  id: string;
  name: string;
  is_seller: boolean;
  business_name: string;
};

interface UseAuthStore {
  user: User;
  setUser: (u: User) => void;
  accessToken: string;
  setAccessToken: (t: string) => void;
}

export const useAuthStore = create<UseAuthStore>((set) => ({
  user: {
    id: "",
    name: "",
    is_seller: false,
    business_name: "",
  },
  setUser: (u) => set({ user: u }),
  accessToken: "",
  setAccessToken: (t) => set({ accessToken: t }),
}));
