import { z } from 'zod';

const taskSchema = z.object({
  id: z.number()
  .optional(),
  content: z.string()
  .min(1, { message: "content too short" })
  .max(30, { message: "content too big" }),
  createdDate: z.string(),
  columnId: z.number()
});

export default taskSchema;