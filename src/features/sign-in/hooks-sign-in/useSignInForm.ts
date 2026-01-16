import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SchemaSignIn, schemaSignIn } from "../schema-sign-in/schema-sign-in";

export function useSignInForm() {
  return useForm<SchemaSignIn>({
    resolver: zodResolver(schemaSignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  });
}
