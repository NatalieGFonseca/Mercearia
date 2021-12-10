'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('fornecedors', [
      {
        nome: 'fornecedor1',
        tipo: 'limpeza',
        telefone: '(12) 3456-5789',
        email: 'fornecedor1@gmail.com'
      },
      {
        nome: 'fornecedor2',
        tipo: 'horti-fruti',
        telefone: '(12) 3246-2189',
        email: 'fornecedor2@gmail.com'
      },
      {
        nome: 'fornecedor3',
        tipo: 'alimenticio',
        telefone: '(12) 4563-1789',
        email: 'fornecedor3@gmail.com'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('fornecedors', null, {});
  }
};
