'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('funcionarios', [
      {
        cpf: '12333333333',
        nome: 'natalie',
        telefone: '(12) 3415-6789',
        funcao: 'atendente',
        rua: 'rua 2',
        bairro: 'jardim',
        data_nascimento: '1994-10-22 00:00:00'
      },
      {
        cpf: '12452681263',
        nome: 'natalia',
        telefone: '(12) 4454-5109',
        funcao: 'gerente',
        rua: 'rua 7',
        bairro: 'jardim',
        data_nascimento: '1997-01-02 00:00:00'
      },
      {
        cpf: '12147852363',
        nome: 'professor',
        telefone: '(12) 5448-4289',
        funcao: 'dono',
        rua: 'rua 20',
        bairro: 'jardim novo',
        data_nascimento: '1987-05-12 00:00:00'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('funcionarios', null, {});
  }
};
