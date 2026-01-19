import z from "zod";

export const schemaSignIn = z.object({
  email: z.email().min(1, "Email tidak boleh kosong!"),
  password: z.string().min(1, "Password tidak boleh kosong!"),
});

export const schemaSignInOtp = z.object({
  otp: z.string(),
});

export type SchemaSignIn = z.infer<typeof schemaSignIn>;
export type SchemaSignInOtp = z.infer<typeof schemaSignInOtp>;
