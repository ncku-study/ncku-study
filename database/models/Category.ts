import { DataTypes, Model, Sequelize } from 'sequelize';
import connection from './connection';

const initCategory = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class Category extends Model {
    declare id: string;
    declare name: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models */) {
      // define association here
    }
  }
  Category.init(
    {
      id: {
        type: dataTypes.UUID,
        primaryKey: true,
        unique: true,
        autoIncrement: false,
        allowNull: false,
      },
      name: dataTypes.STRING,
    },
    {
      sequelize,
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Category;
};

export default initCategory(connection, DataTypes);
