module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Statistic', {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                unique: true,
                autoIncrement: false,
                allowNull: false,
            },
            name: Sequelize.STRING,
            type: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            min: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            max: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            confirm: {
                type: Sequelize.TINYINT,
                defaultValue: 0,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('Statistic');
    },
};
