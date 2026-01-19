import { AxiosAuth } from "../../../lib/axios";
import type { SchemaRegister } from "../schema-register/schema-register";

export async function registerUser(data: SchemaRegister) {
  const call = await AxiosAuth(`/auth/register`, {
    method: "POST",
    data,
  });
  return call.data;
}
