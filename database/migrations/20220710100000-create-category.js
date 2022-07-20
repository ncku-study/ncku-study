module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Category', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        unique: true,
        autoIncrement: false,
        allowNull: false,
      },
      name: Sequelize.STRING,
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Category');
  },
};
