import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

class UserBoard extends Model {
  userId!: number;
  boardId!: number;
}

UserBoard.init(
  {
    userId: DataTypes.NUMBER,
    boardId: DataTypes.NUMBER
  },
  {
    sequelize: dbConfig,
    modelName: 'User',
    underscored: true,
    timestamps: false
  }
);

export default UserBoard;