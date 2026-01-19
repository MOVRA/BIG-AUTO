import type {
  VerifyOtp,
  SignInResponsePayload,
} from "../models-sign-in/model-sign-in";
import axios from "axios";
import { AUTH_API } from "../../../lib/constants";
import type { SchemaSignIn } from "../schema-sign-in/schema-sign-in";

export async function signIn(data: SchemaSignIn): Promise<{
  status: number;
  data: SignInResponsePayload;
}> {
  const call = await axios(`${AUTH_API}/auth/login`, {
    method: "POST",
    data,
  });
  return { data: call.data, status: call.status };
}

export async function verifyOTP(data: VerifyOtp) {
  const call = await axios(`${AUTH_API}/auth/verify-otp`, {
    method: "POST",
    data,
  });
  return call.data;
}
