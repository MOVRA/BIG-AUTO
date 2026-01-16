import Cookies from "js-cookie";
import { refreshToken } from "../services/api";

export function GetToken(): string | undefined {
  const accessToken = Cookies.get("ident_2");
  return accessToken;
}

export async function RefreshToken(): Promise<string | null | undefined> {
  try {
    const refToken = Cookies.get("ident_1");
    const newToken = await refreshToken(refToken ?? "");
    Cookies.set("ident_2", newToken.access_token);
    return newToken.access_token;
  } catch {
    Cookies.remove("ident_1");
    Cookies.remove("ident_2");
    window.location.href = "/login";
  }
}
