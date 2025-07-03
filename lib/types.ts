import z from "zod";

export const loginSchema = z.object({
  username: z.string().min(2, "Username must be at least 4 characters."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

export const signupSchemaBase = loginSchema.extend({
  firstName: z.string().min(2, "Name must be at least 2 characters."),
  lastName: z.string().min(2, "Surname must be at least 2 characters."),
  confirmPassword: z.string(),
});

export const signupSchema = signupSchemaBase.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  }
);

export type TSignupSchema = z.infer<typeof signupSchema>;
