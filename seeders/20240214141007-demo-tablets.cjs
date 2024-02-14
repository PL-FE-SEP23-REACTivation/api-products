/* eslint-disable max-len */
'use strict';
const tablets = require('../public/api/tablets.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tablets', tablets, {}, {description: {type: new Sequelize.JSONB()}});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tablets', null, {});
  }
};
