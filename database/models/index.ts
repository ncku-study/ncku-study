import Category from './Category';
import Statistic from './Statistic';
import Study from './Study';
import StudyCategory from './StudyCategory';
import StudyStatistic from './StudyStatistic';

Study.belongsToMany(Category, {
  through: StudyCategory,
});
Category.belongsToMany(Study, {
  through: StudyCategory,
});

Study.belongsToMany(Statistic, {
  through: StudyStatistic,
});
Statistic.belongsToMany(Study, {
  through: StudyStatistic,
});

export { Study, Category, Statistic, StudyCategory, StudyStatistic };
