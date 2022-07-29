import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

import Study from './Study';
import StudyCategory from './StudyCategory';

@Table
class Category extends Model {
    @PrimaryKey
    @Column(DataType.UUID)
    id: string;

    @Column
    name: string;

    @BelongsToMany(() => Study, () => StudyCategory)
    studies: Array<Study & { StudyCategory: StudyCategory }>;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models */) {
        // define association here
    }
}
export default Category;
