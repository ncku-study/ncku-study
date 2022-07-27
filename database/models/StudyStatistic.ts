import {
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import Statistic from './Statistic';
import Study from './Study';

@Table({
  tableName: 'Study_Statistic',
  timestamps: false,
  underscored: true,
})
class StudyStatistic extends Model {
  @ForeignKey(() => Study)
  @PrimaryKey
  @Column
  studyId: string;

  @ForeignKey(() => Statistic)
  @PrimaryKey
  @Column
  statisticId: string;

  @Column
  value: string;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(/* models */) {
    // define association here
  }
}

export default StudyStatistic;
