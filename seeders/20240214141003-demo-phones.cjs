/* eslint-disable max-len */
'use strict';
const phones = require('../public/api/phones.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Phones',
      phones,
      {},
      { description: { type: new Sequelize.JSONB() } }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Phones', null, {});
  },
};
