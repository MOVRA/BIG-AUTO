import { AxiosAuth } from "../lib/axios";
import { AUTH_API } from "../lib/constants";
import type { FetchErrorType } from "../models/models";

export async function refreshToken(token: string) {
  const call = await fetch(`${AUTH_API}/authentication/refresh`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!call.ok) {
    const error: FetchErrorType = new Error("Something went wrong!");
    error.info = await call.json();
    error.status = call.status;
    throw error;
  }

  const res = await call.json();
  return res.data;
}

export async function me() {
  const call = await AxiosAuth(`/users/me`);
  return call.data;
}
