import {
  schemaRegister,
  type SchemaRegister,
} from "../schema-register/schema-register";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function useRegisterForm() {
  return useForm<SchemaRegister>({
    resolver: zodResolver(schemaRegister),
    defaultValues: {
      name: "",
      email: "",
      city: "",
      address: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });
}
