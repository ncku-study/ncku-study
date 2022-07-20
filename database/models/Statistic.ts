import { DataTypes, Model, Sequelize } from 'sequelize';
import connection from './connection';

const initStatistic = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models */) {
      // define association here
    }
  }
  Statistic.init(
    {
      id: {
        type: dataTypes.UUID,
        primaryKey: true,
        unique: true,
        autoIncrement: false,
        allowNull: false,
      },
      name: dataTypes.STRING,
      type: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      min: {
        type: dataTypes.FLOAT,
        defaultValue: 0,
      },
      max: {
        type: dataTypes.FLOAT,
        defaultValue: 0,
      },
      confirm: {
        type: dataTypes.TINYINT,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
  return Statistic;
};

export default initStatistic(connection, DataTypes);
