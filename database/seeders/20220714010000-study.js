/* eslint-disable @typescript-eslint/no-var-requires */
const { v4: uuidv4 } = require('uuid');
// const Category = require('../models/Category');

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        // const id = uuidv4();
        // await queryInterface.bulkInsert('Study', [
        //   {
        //     id,
        //     title: 'Study: test-01',
        //     major: 'test major',
        //     year: 2020,
        //     content: 'Study: content-01',
        //   },
        // ]);
        // const category = await Category.findAll();
        // return queryInterface.bulkInsert('Study_Category', [
        //   {
        //     Study_id: id,
        //     Category_id: category[0],
        //   },
        // ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
