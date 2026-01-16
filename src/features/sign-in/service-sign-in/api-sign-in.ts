import { AxiosAuth } from "../../../lib/axios";
import type { SchemaSignInType } from "../schema-sign-in/schema-sign-in";

export async function signIn(data: SchemaSignInType) {
  const call = await AxiosAuth(`/auth/login`, {
    data,
  });
  return call.data;
}
