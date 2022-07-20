import { DataTypes, Model, Sequelize } from 'sequelize';
import Category from './Category';
import connection from './connection';
import Study from './Study';

const initStudyCategory = (
  sequelize: Sequelize,
  dataTypes: typeof DataTypes
) => {
  class StudyCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models */) {
      // define association here
    }
  }
  StudyCategory.init(
    {},
    {
      sequelize,
      tableName: 'Study_Category',
      timestamps: false,
      underscored: true,
    }
  );
  return StudyCategory;
};

export default initStudyCategory(connection, DataTypes);
