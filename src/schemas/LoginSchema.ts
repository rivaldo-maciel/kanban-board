import { z } from 'zod';

const loginSchema = z.object({
  email: z.string()
  .email(),
  password: z.string()
  .min(8, { message: "password must be at least 8 characters long" })
  .max(20, { message: "password too big" })
});

export default loginSchema;