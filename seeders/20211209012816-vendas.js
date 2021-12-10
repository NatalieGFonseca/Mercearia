'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('vendas', [
      {
        valor: 250.00,
        data: '2021-12-07 00:00:00',
        id_funcionario: 1
      },
      {
        valor: 20.00,
        data: '2021-12-01 00:00:00',
        id_funcionario: 2
      },
      {
        valor: 210.00,
        data: '2021-12-06 00:00:00',
        id_funcionario: 3
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vendas', null, {});
  }
};
