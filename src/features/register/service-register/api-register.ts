import { AxiosAuth } from "../../../lib/axios";
import type { SchemaRegister } from "../schema-register/schema-register";

export async function register(data: SchemaRegister) {
  const call = await AxiosAuth(`/api/auth/register`, {
    method: "POST",
    data,
  });
  return call.data;
}
