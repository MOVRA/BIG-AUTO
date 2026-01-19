import {
  schemaSignIn,
  schemaSignInOtp,
  type SchemaSignIn,
  type SchemaSignInOtp,
} from "../schema-sign-in/schema-sign-in";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function useSignInForm() {
  return useForm<SchemaSignIn>({
    resolver: zodResolver(schemaSignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  });
}

export function useSignInOtpForm() {
  return useForm<SchemaSignInOtp>({
    resolver: zodResolver(schemaSignInOtp),
    defaultValues: {
      otp: "",
    },
  });
}
