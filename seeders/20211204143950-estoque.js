'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('estoques', [
      {
        id_produto: 1
      },
      {
        id_produto: 2
      },
      {
        id_produto: 3
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('estoques', null, {});
  }
};
