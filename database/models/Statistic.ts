import {
    Column,
    DataType,
    Default,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

@Table
class Statistic extends Model {
    @PrimaryKey
    @Column(DataType.UUID)
    id: string;

    @Column
    name: string;

    @Column
    type: string;

    @Default(0)
    @Column(DataType.FLOAT)
    min: number;

    @Default(0)
    @Column(DataType.FLOAT)
    max: number;

    @Default(0)
    @Column(DataType.TINYINT)
    confirm: number;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models */) {
        // define association here
    }
}

export default Statistic;
