import { z } from "zod";
import { patterns } from "../../constants";

export const userSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((email) => patterns.email.test(email), {
      message: "Email not valid",
    }),
  states: z.array(z.string()).min(1).max(2),
});

export type UserSchema = z.infer<typeof userSchema>;

export const defaultValues: UserSchema = {
  email: "",
  name: "",
  states: [],
};
