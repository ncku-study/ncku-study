/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-var-requires */
const { v4: uuidv4 } = require('uuid');

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

module.exports = {
    async up(queryInterface) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        const categories = [];
        for (let i = 0; i < 10; i += 1) {
            const id = uuidv4();
            categories.push(id);
            await queryInterface.bulkInsert('Category', [
                {
                    id,
                    name: `test-${i}-cate`,
                },
            ]);
        }

        const statistics = [];
        const type = ['string', 'integer', 'float'];
        for (let i = 0; i < 10; i += 1) {
            const id = uuidv4();
            await queryInterface.bulkInsert('Statistic', [
                {
                    id,
                    name: `test-${i}-stat`,
                    type: type[i % 3],
                },
            ]);
            statistics.push({ id, type: type[i % 3] });
        }

        for (let i = 0; i < 30; i += 1) {
            const id = uuidv4();
            await queryInterface.bulkInsert('Study', [
                {
                    id,
                    title: `test-${i}-title`,
                    major: 'test-major',
                    year: 2016 + i,
                    content: `content-${i}. `.repeat(25),
                    confirm: Math.round(Math.random()),
                },
            ]);
            await sleep(1000);

            for (let j = 0; j < 2; j += 1) {
                await queryInterface.bulkInsert('Study_Category', [
                    {
                        study_id: id,
                        category_id: categories[(i + j) % 10],
                    },
                ]);
            }

            for (let j = 0; j < 2; j += 1) {
                await queryInterface.bulkInsert('Study_Statistic', [
                    {
                        study_id: id,
                        statistic_id: statistics[(i + j) % 10].id,
                        value:
                            // eslint-disable-next-line no-nested-ternary
                            statistics[(i + j) % 10].type === 'string'
                                ? '優等'
                                : statistics[(i + j) % 10].type === 'integer'
                                ? 100
                                : 92.5,
                    },
                ]);
            }
        }
    },

    async down() {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
