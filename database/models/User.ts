import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  freezeTableName: true,
  timestamps: false,
})
class User extends Model {
  @PrimaryKey
  @Column
  account: string;

  @Column
  password: string;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(/* models */) {
    // define association here
  }
}

export default User;
