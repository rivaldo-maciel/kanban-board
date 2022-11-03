import { Board } from '../../database/models';
import IServices from './IServices';

interface IBoardServices extends IServices<Board> {
  getBoardsByUserId(userId: number);
}

export default IBoardServices;
