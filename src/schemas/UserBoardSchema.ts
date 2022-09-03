import { z } from 'zod';

const userBoardSchema = z.object({
  userId: z.number(),
  boardId: z.number()
});

export default userBoardSchema;