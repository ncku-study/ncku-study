import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import Category from './Category';
import Study from './Study';

@Table({
  tableName: 'Study_Category',
  timestamps: false,
  underscored: true,
})
class StudyCategory extends Model {
  @ForeignKey(() => Study)
  @PrimaryKey
  @Column(DataType.UUID)
  studyId: string;

  @ForeignKey(() => Category)
  @PrimaryKey
  @Column(DataType.UUID)
  categoryId: string;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(/* models */) {
    // define association here
  }
}

export default StudyCategory;
