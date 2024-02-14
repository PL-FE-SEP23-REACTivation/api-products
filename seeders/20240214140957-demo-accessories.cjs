/* eslint-disable max-len */
'use strict';
const accessories = require('../public/api/accessories.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Accessories',
      accessories,
      {},
      { description: { type: new Sequelize.JSONB() } }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accessories', null, {});
  },
};
