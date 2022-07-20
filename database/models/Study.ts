/* eslint-disable no-use-before-define */
import Category from 'databasess/models/Category';
import {
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from 'sequelize';
import connection from './connection';

class Study extends Model<
  InferAttributes<Study, { omit: 'categories' }>,
  InferCreationAttributes<Study, { omit: 'categories' }>
> {
  declare id: string;
  declare title: string;
  declare major: string;
  declare year: CreationOptional<number>;
  declare confirm: CreationOptional<number>;
  declare content: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare getCategories: HasManyGetAssociationsMixin<Category>;

  declare categories?: NonAttribute<Category[]>;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(/* models */) {
    // define association here
  }
}
Study.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      autoIncrement: false,
      allowNull: false,
    },
    title: DataTypes.STRING,
    major: DataTypes.STRING,
    year: DataTypes.INTEGER.UNSIGNED,
    confirm: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    content: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: connection,
    freezeTableName: true,
    underscored: true,
  }
);

export default Study;
