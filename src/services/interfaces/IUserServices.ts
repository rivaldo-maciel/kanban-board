import { User } from '../../database/models';
import IServices from './IServices';

interface IUserServices extends IServices<User> {

}

export default IUserServices;