module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Study_Category', {
            studyId: {
                field: 'study_id',
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
            },
            categoryId: {
                field: 'category_id',
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('Study_Category');
    },
};
