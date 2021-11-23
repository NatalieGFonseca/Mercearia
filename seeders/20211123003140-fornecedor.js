'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('fornecedor', [
      {
        nome: 'fornecedor1',
        tipo: 'limpeza',
        telefone: 123456789,
        email: 'fornecedor1@gmail.com'
      },
      {
        nome: 'fornecedor2',
        tipo: 'horti-fruti',
        telefone: 12324689,
        email: 'fornecedor2@gmail.com'
      },
      {
        nome: 'fornecedor3',
        tipo: 'alimenticio',
        telefone: 456321789,
        email: 'fornecedor3@gmail.com'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('fornecedor', null, {});
  }
};
