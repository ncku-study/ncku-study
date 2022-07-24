import { DataType } from 'sequelize-typescript';
import Category from './Category';

import connection from './connection';
import Statistic from './Statistic';
import Study from './Study';
import StudyCategory from './StudyCategory';
import StudyStatistic from './StudyStatistic';

Study.init(
  {
    id: {
      type: DataType.UUID,
      primaryKey: true,
    },
    title: DataType.STRING,
    major: DataType.STRING,
    year: DataType.INTEGER.UNSIGNED,
    confirm: {
      type: DataType.TINYINT,
      defaultValue: 0,
    },
    content: DataType.TEXT,
    createdAt: DataType.DATE,
    updatedAt: DataType.DATE,
  },
  {
    sequelize: connection,
    freezeTableName: true,
    underscored: true,
  }
);

Category.init(
  {
    id: {
      type: DataType.UUID,
      primaryKey: true,
    },
    name: DataType.STRING,
  },
  {
    sequelize: connection,
    freezeTableName: true,
    timestamps: false,
  }
);

Statistic.init(
  {
    id: {
      type: DataType.UUID,
      primaryKey: true,
    },
    name: DataType.STRING,
    type: {
      type: DataType.STRING,
      allowNull: false,
    },
    min: {
      type: DataType.FLOAT,
      defaultValue: 0,
    },
    max: {
      type: DataType.FLOAT,
      defaultValue: 0,
    },
    confirm: {
      type: DataType.TINYINT,
      defaultValue: 0,
    },
  },
  {
    sequelize: connection,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

StudyCategory.init(
  {},
  {
    sequelize: connection,
    tableName: 'Study_Category',
    timestamps: false,
    underscored: true,
  }
);

StudyStatistic.init(
  {
    value: DataType.STRING,
  },
  {
    sequelize: connection,
    tableName: 'Study_Statistic',
    timestamps: false,
    underscored: true,
  }
);

Study.belongsToMany(Category, {
  through: StudyCategory,
  as: 'categories',
});
Category.belongsToMany(Study, {
  through: StudyCategory,
});

Study.belongsToMany(Statistic, {
  through: StudyStatistic,
  as: 'statistics',
});
Statistic.belongsToMany(Study, {
  through: StudyStatistic,
});

export { Study, Category, Statistic, StudyCategory, StudyStatistic };
