import { DataSource, EntityTarget, Repository } from 'typeorm';
import { User } from '../database/models';
import NotFoundError from '../errors/NotFoundError';
import * as bcrypt from 'bcrypt';
import NonExistentUserError from "../errors/NonExistentUserError";

class Login {
  private dataSource: DataSource;
  protected repository: Repository<User>;

  constructor(dataSource: DataSource, model: EntityTarget<User>) {
    this.dataSource = dataSource;
    this.repository = dataSource.getRepository(model);
  }

  public async sigIn(email: string, password: string): Promise<void> {
    const user = await this.repository.findOne({ where: { email }});
    if (user == undefined) {
      throw new NonExistentUserError();
    }
    await bcrypt.compare(password, user.password);

  }
}