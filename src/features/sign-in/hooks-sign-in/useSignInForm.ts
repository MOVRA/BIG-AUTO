import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaSignIn } from "../schema-sign-in/schema-sign-in";

export function useSignInForm() {
  return useForm({
    resolver: zodResolver(SchemaSignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  });
}
