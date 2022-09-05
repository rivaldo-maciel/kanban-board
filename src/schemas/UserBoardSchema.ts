import { z } from 'zod';

const userBoardSchema = z.object({
  userId: z.string(),
  boardId: z.string()
});

export default userBoardSchema;