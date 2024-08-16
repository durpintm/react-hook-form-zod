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
});
