'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('itens', [
      {
        quantidade: 5,
        id_venda: 1,
        id_produto: 1
      },
      {
       
        quantidade: 10,
        id_venda: 2,
        id_produto: 2
      },
      {
        quantidade: 5,
        id_venda: 3,
        id_produto: 3
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('itens', null, {});
  }
};
