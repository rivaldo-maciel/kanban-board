import { DataSource, EntityTarget, Repository } from 'typeorm';
import { User } from '../database/models';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import NonExistentUserError from '../errors/NonExistentUserError';
import 'dotenv/config';
import { z, ZodRawShape } from 'zod';


class Login {
  private dataSource: DataSource;
  protected repository: Repository<User>;
  protected schema: z.ZodObject<ZodRawShape>;

  constructor(dataSource: DataSource, model: EntityTarget<User>) {
    this.dataSource = dataSource;
    this.repository = dataSource.getRepository(model);
  }

  public async sigIn(email: string, password: string): Promise<string> {
    this.schema.parse({ email, password });
    const user = await this.repository.findOne({ where: { email }});
    if (!user) {
      throw new NonExistentUserError();
    }
    await bcrypt.compare(password, user.password);
    const payload = Object.assign({}, user);
    delete payload.password;
    const token = jwt.sign(payload, process.env.JWY_SECRET);
    return token;
  }
}

export default Login;