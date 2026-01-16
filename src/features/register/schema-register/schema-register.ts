import z from "zod";

export const schemaRegister = z
  .object({
    name: z.string().min(1, "Fullname can't be empty!"),
    email: z
      .email("That is not an email format!")
      .min(1, "Email can't be empty!"),
    city: z.string().min(1, "City can't be empty!"),
    address: z.string().min(1, "Address can't be empty!"),
    phone: z.string().min(1, "Phone Number can't be empty!"),
    password: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .refine(
        (val) =>
          val === undefined ||
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(val),
        {
          message:
            "Password harus mengandung huruf besar, huruf kecil, angka, dan karakter khusus",
        }
      )
      .optional(),
    confirmPassword: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.password && !data.confirmPassword) return;

    if (!data.password && data.confirmPassword) {
      ctx.addIssue({
        path: ["password"],
        message: "Password is required!",
        code: "custom",
      });
      return;
    }

    if (data.password && !data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        message: "Konfirmasi password is required!",
        code: "custom",
      });
      return;
    }

    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        message: "Password and konfirmasi is not the same",
        code: "custom",
      });
    }
  });

export type SchemaRegister = z.infer<typeof schemaRegister>;
