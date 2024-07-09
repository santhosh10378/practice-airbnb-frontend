import { z } from "zod";

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const authSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .optional(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().regex(passwordPattern, {
    message:
      "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character",
  }),
});

export default authSchema;
