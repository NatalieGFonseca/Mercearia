'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'Natalie',
        senha: '1234'
      },
      {
        nome: 'Natalia',
        senha: '1234'
      },
      {
        nome: 'Professor',
        senha: '1234'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
