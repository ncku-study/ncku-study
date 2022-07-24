import {
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import Category from './Category';
import Statistic from './Statistic';
import StudyCategory from './StudyCategory';
import StudyStatistic from './StudyStatistic';

@Table({
  freezeTableName: true,
  underscored: true,
})
class Study extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column
  title: string;

  @Column
  major: string;

  @Column
  year: number;

  @Default(0)
  @Column(DataType.TINYINT)
  confirm: number;

  @Column(DataType.TEXT)
  content: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsToMany(() => Category, () => StudyCategory)
  categories: Array<Category & { StudyCategory: StudyCategory }>;

  @BelongsToMany(() => Statistic, () => StudyStatistic)
  statistics: Array<Statistic & { StudyStatistic: StudyStatistic }>;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(/* models */) {
    // define association here
  }
}

export default Study;
