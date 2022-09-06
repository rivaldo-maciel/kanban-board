import { DataSource, EntityTarget, Repository } from 'typeorm';
import { User } from '../database/models';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import NonExistentUserError from '../errors/NonExistentUserError';
import 'dotenv/config';
import { z, ZodRawShape } from 'zod';
import WrongLoginFieldsError from '../errors/WrongLoginFieldsError';

class LoginServices {
  private dataSource: DataSource;
  protected repository: Repository<User>;
  protected _schema: z.ZodObject<ZodRawShape>;

  constructor(
    dataSource: DataSource,
    model: EntityTarget<User>,
    schema: z.ZodObject<ZodRawShape>
  ) {
    this.dataSource = dataSource;
    this.repository = dataSource.getRepository(model);
    this._schema = schema;
  }

  public async sigIn(email: string, password: string): Promise<string> {
    this.schema.parse({ email, password });
    const user = await this.repository.findOne({ where: { email } });
    if (!user) {
      throw new NonExistentUserError();
    }
    const isCorrectFields = await bcrypt.compare(password, user.password);
    if (!isCorrectFields) {
      throw new WrongLoginFieldsError();
    }
    const payload = Object.assign({}, user);
    delete payload.password;
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
  }

  get schema() {
    return this._schema;
  }
}

export default LoginServices;
