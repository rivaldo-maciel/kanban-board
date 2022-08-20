import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

class Board extends Model {
  id?: number;
  title!: string;
}

Board.init(
  {
    title: DataTypes.STRING,
  },
  {
    sequelize: dbConfig,
    modelName: 'Board',
    underscored: true,
    timestamps: false
  }
);

export default Board;