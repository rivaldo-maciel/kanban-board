import { z } from 'zod';

const boardSchema = z.object({
  id: z.number()
  .optional(),
  title: z.string()
  .min(1, { message: "title too short" })
  .max(14, { message: "title too big" }),
});

export default boardSchema;