import { Model, DataTypes } from 'sequelize';
import dbConfig from '.';

class Task extends Model {
  id?: number;
  content!: string;
  createdDate!: Date;
  columnId!: number;
}

Task.init(
  {
    content: DataTypes.STRING,
    createdDate: DataTypes.DATE,
    columnId: DataTypes.NUMBER
  },
  {
    sequelize: dbConfig,
    modelName: 'Task',
    underscored: true,
    timestamps: false
  }
);

export default Task;