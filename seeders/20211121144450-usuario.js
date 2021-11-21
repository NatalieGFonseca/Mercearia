'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuario', [
      {
        login: 'Natalie',
        senha: '1234'
      },
      {
        login: 'Natalia',
        senha: '1234'
      },
      {
        login: 'Professor',
        senha: '1234'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
