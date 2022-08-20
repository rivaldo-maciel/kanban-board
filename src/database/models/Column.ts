import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

class UserBoard extends Model {
  id?: number;
  title!: string;
  boardId!: number;
}

UserBoard.init(
  {
    title: DataTypes.STRING,
    boardId: DataTypes.NUMBER
  },
  {
    sequelize: dbConfig,
    modelName: 'Column',
    underscored: true,
    timestamps: false
  }
);

export default UserBoard;