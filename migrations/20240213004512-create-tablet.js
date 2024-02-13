'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tablets', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      namespaceId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      capacityAvailable: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      capacity: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      priceRegular: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      priceDiscount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      colorAvailable: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      images: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      description: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.JSON),
      },
      screen: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      resolution: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      processor: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ram: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      camera: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      zoom: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cell: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tablets');
  },
};
