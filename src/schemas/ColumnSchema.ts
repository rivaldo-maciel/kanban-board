import { z } from 'zod';

const columnSchema = z.object({
  id: z.number()
  .optional(),
  title: z.string()
  .min(1, { message: "title too short" })
  .max(14, { message: "title too big" }),
  boardId: z.number()
});

export default columnSchema;