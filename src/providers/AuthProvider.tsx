import Cookies from "js-cookie";
import { me } from "../services/api";
import { useLayoutEffect, useState } from "react";
import { useAuthStore } from "../stores/useAuthStore";

interface AuthProviderProps {
  children?: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [load, setLoad] = useState(false);
  const { setAccessToken, setUser } = useAuthStore();

  useLayoutEffect(() => {
    const setToken = async () => {
      try {
        setLoad(true);
        const accessToken = Cookies.get("ident_2");
        const user = await me();
        setAccessToken(accessToken ?? "");
        setUser({
          id: user?.id ?? "",
          name: user?.name ?? "",
          is_seller: user?.is_seller ?? false,
          business_name: user?.business_name ?? ""
        });
      } catch (error) {
      } finally {
        setLoad(false);
      }
    };
    setToken();
  }, []);

  if (load)
    return (
      <div className="text-9xl flex items-center justify-center">
        Load App . . .
      </div>
    );

  return children;
}
