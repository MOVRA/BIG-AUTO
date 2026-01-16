import { AxiosAuth } from "../../../lib/axios";
import type { SchemaSignIn } from "../schema-sign-in/schema-sign-in";

export async function signIn(data: SchemaSignIn) {
  const call = await AxiosAuth(`/auth/login`, {
    method: "POST",
    data,
  });
  return call.data;
}
