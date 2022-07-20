import { DataTypes, Model, Sequelize } from 'sequelize';
import connection from './connection';

const initStudyStatistic = (
  sequelize: Sequelize,
  dataTypes: typeof DataTypes
) => {
  class StudyStatistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models */) {
      // define association here
    }
  }
  StudyStatistic.init(
    {
      value: dataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'Study_Statistic',
      timestamps: false,
      underscored: true,
    }
  );
  return StudyStatistic;
};

export default initStudyStatistic(connection, DataTypes);
