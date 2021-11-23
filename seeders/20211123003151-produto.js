'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('produto', [
      {
        nome: 'detergente',
        tipo: 'limpeza',
        preco_unitario: 1.50,
        id_fornecedor: 1
      },
      {
        nome: 'abacaxi',
        tipo: 'horti-fruti',
        preco_unitario: 5.00,
        id_fornecedor: 2
      },
      {
        nome: 'bolacha',
        tipo: 'alimenticio',
        preco_unitario: 8.00,
        id_fornecedor: 3
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('produto', null, {});
  }
};
