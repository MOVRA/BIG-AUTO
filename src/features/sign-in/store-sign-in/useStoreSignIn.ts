import { create } from "zustand";

type Response = {
  message: string;
  user_id: number | null;
};

interface UseStoreSignIn {
  response: Response;
  setResponse: (res: Response) => void;
}

export const useStoreSignIn = create<UseStoreSignIn>((set) => ({
  response: {
    message: "",
    user_id: 0,
  },
  setResponse: (res) => set({ response: res }),
}));
