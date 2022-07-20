module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Study_Statistic', {
      studyId: {
        field: 'study_id',
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      statisticId: {
        field: 'statistic_id',
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      value: Sequelize.STRING,
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Study_Statistic');
  },
};
