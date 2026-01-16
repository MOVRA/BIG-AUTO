import z from "zod";

export const SchemaSignIn = z.object({
  email: z.email().min(1, "Email tidak boleh kosong!"),
  password: z.string().min(1, "Password tidak boleh kosong!"),
});

export type SchemaSignInType = z.infer<typeof SchemaSignIn>;
