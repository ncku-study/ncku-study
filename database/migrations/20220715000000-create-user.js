module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('User', {
            account: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            password: {
                type: Sequelize.STRING,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('User');
    },
};
