module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Study', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        unique: true,
        autoIncrement: false,
        allowNull: false,
      },
      title: Sequelize.STRING,
      major: Sequelize.STRING,
      year: Sequelize.INTEGER,
      confirm: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      content: Sequelize.TEXT,

      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Study');
  },
};
