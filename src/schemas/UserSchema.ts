import { z } from 'zod';

const userSchema = z.object({
  id: z.number().optional(),
  firstName: z
    .string()
    .min(1, { message: 'name too short' })
    .max(14, { message: 'name too big' }),
  lastName: z
    .string()
    .min(1, { message: 'name too short' })
    .max(14, { message: 'name too big' }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'password must be at least 8 characters long' })
    .max(20, { message: 'password too big' })
});

export default userSchema;
